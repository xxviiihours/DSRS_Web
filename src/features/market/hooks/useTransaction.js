import { usePurchaseItemMutation, useSellItemMutation } from '@/features/market';
import { showAlert } from '@/shared';
import { getApiErrorMessage } from '@/shared/utils/apiHelper';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useTransaction = ({ data }) => {
	const player = useSelector((state) => state.player);
	const dispatch = useDispatch();
	const [purchaseItem, { isLoading: purchaseLoading, isError: purchaseError }] =
		usePurchaseItemMutation();
	const [sellItem, { isLoading: sellLoading, isError: sellError }] = useSellItemMutation();
	const [type, setType] = useState('');

	const executeTransaction = async (trigger, { quantity, itemId }, type, successMessage) => {
		try {
			setType(type);
			await trigger({ quantity, itemId, playerId: player.id }).unwrap();
			dispatch(showAlert({ message: successMessage, succeeded: true }));
		} catch (error) {
			dispatch(showAlert({ message: getApiErrorMessage(error), succeeded: false }));
		}
	};

	const doPurchase = async ({ quantity, itemId }) =>
		await executeTransaction(purchaseItem, { quantity, itemId }, 'BUY', 'Purchase completed!');

	const doSell = async ({ quantity, itemId }) =>
		await executeTransaction(sellItem, { quantity, itemId }, 'SELL', 'Transaction completed!');

	const item = player.inventoryItems.find((i) => i.itemId === data?.item?.id);
	const canSell = item !== undefined;
	const maxPurchase = data.price > 0 ? Number.parseInt(player.balance / data.price) : 0;

	const max = type === '' || type === 'SELL' ? (item?.quantity ?? maxPurchase) : maxPurchase;

	return {
		transaction: {
			balance: player.balance,
			maxPurchase,
			canSell,
			max,
			quantity: item?.quantity ?? 0,
		},
		state: {
			purchaseLoading,
			purchaseError,
			sellLoading,
			sellError,
		},
		actions: {
			doPurchase,
			doSell,
		},
	};
};

export default useTransaction;
