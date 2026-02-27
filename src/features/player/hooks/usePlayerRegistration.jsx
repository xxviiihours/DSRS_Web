import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiErrorMessage } from '@/shared';
import {
	setPlayer,
	useLazyGetPlayerByNameQuery,
	useRegisterPlayerMutation,
} from '@/features/player';

const usePlayerRegistration = () => {
	const dispatch = useDispatch();
	const player = useSelector((state) => state.player);
	const [getPlayerByName] = useLazyGetPlayerByNameQuery();
	const [registerPlayer] = useRegisterPlayerMutation();

	const [state, setState] = useState({
		status: 'idle',
		message: '',
	});

	const doRegister = async (payload) => {
		try {
			setState({ status: 'loading', message: '' });
			let player;

			try {
				player = await getPlayerByName(payload).unwrap();
			} catch (err) {
				if (err?.status !== 404) {
					setState((prev) => ({
						...prev,
						status: 'error',
						message: getApiErrorMessage(err),
					}));
				}

				player = await registerPlayer(payload).unwrap();

				setState({
					status: 'success',
					message: 'Successfully Registered!',
				});
			}

			dispatch(setPlayer(player));
			setState({
				status: 'success',
				message: `Welcome back ${player.name}!`,
			});
		} catch (error) {
			setState({
				status: 'error',
				message: getApiErrorMessage(err),
			});
		}
	};

	const reset = () => {
		setState((prev) => ({
			...prev,
			status: 'idle',
			message: '',
		}));
	};

	const { status, message } = state;

	const isLoading = status === 'loading';
	const isSuccess = status === 'success';
	const isError = status === 'error';

	return {
		player,
		state: { message, isLoading, isSuccess, isError },
		actions: { doRegister, reset },
	};
};

export default usePlayerRegistration;
