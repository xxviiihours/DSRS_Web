import { useDispatch, useSelector } from 'react-redux';
import {
	usePurchaseItemMutation,
	useSellItemMutation,
} from '../../features/market/api/marketApi';
import { useLazyGetPlayerByIdQuery } from '../../features/player/api/playerApi';
import { useState } from 'react';
import { setPlayer } from '../../features/player/model/playerSlice';
import { getApiErrorMessage } from '../../utils/apiHelper';

export function useTransaction() {
	const player = useSelector((state) => state.player);
	const dispatch = useDispatch();

	const [purchaseItem] = usePurchaseItemMutation();
	const [sellItem] = useSellItemMutation();
	const [getPlayerById] = useLazyGetPlayerByIdQuery();

	const [state, setState] = useState({
		status: 'idle',
		message: '',
	});

	const doPurchase = async ({ quantity, itemId }) => {
		try {
			setState({ status: 'loading' });
			const request = {
				quantity,
				itemId,
				playerId: player.id,
			};

			await purchaseItem(request).unwrap();

			const updatedPlayer = await getPlayerById({ id: player.id }).unwrap();
			dispatch(setPlayer(updatedPlayer));

			setState({
				status: 'success',
				message: 'Purchase completed!',
			});
		} catch (error) {
			setState({
				status: 'error',
				message: getApiErrorMessage(error),
			});
		}
	};

	const doSell = async ({ quantity, itemId }) => {
		try {
			setState({ status: 'loading' });
			const request = {
				quantity,
				itemId,
				playerId: player.id,
			};

			console.log('SOLD:', request);
			await sellItem(request).unwrap();

			const updatedPlayer = await getPlayerById({ id: player.id }).unwrap();
			dispatch(setPlayer(updatedPlayer));

			setState({
				status: 'success',
				message: 'Transaction complete!',
			});
		} catch (error) {
			setState({
				status: 'error',
				message: getApiErrorMessage(error),
			});
		}
	};

	const reset = () => {
		setState((prev) => ({ ...prev, status: 'idle', message: '' }));
	};

	const { status, message } = state;

	const isLoading = status === 'loading';
	const isSuccess = status === 'success';
	const isError = status === 'error';

	return {
		player,
		state: {
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
}
