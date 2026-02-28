import { usePurchaseItemMutation, useSellItemMutation } from '@/features/market';
import { getApiErrorMessage } from '@/shared/utils/apiHelper';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const useTransaction = ({ data }) => {
	const player = useSelector((state) => state.player);

	const [purchaseItem] = usePurchaseItemMutation();
	const [sellItem] = useSellItemMutation();
	const [state, setState] = useState({
		type: '',
		status: 'idle',
		message: '',
	});

	const executeTransaction = async (trigger, { quantity, itemId }, type, successMessage) => {
		try {
			setState({ status: 'loading', type });
			await trigger({ quantity, itemId, playerId: player.id }).unwrap();
			setState({ status: 'success', message: successMessage });
		} catch (error) {
			setState({ status: 'error', message: getApiErrorMessage(error) });
		}
	};

	const doPurchase = async ({ quantity, itemId }) =>
		await executeTransaction(purchaseItem, { quantity, itemId }, 'BUY', 'Purchase completed!');

	const doSell = async ({ quantity, itemId }) =>
		await executeTransaction(sellItem, { quantity, itemId }, 'SELL', 'Transaction completed!');

	const reset = () => {
		setState({ type: '', status: 'idle', message: '' });
	};

	const { type, status, message } = state;

	const isLoading = status === 'loading';
	const isSuccess = status === 'success';
	const isError = status === 'error';

	const item = player.inventoryItems.find((i) => i.itemId === data.item.id);
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
			type,
			message,
			isLoading,
			isSuccess,
			isError,
		},
		actions: {
			doPurchase,
			doSell,
			reset,
		},
	};
};

export default useTransaction;
