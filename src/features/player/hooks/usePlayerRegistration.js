import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getApiErrorMessage, showAlert } from '@/shared';
import {
	setPlayer,
	useLazyGetPlayerByNameQuery,
	useRegisterPlayerMutation,
} from '@/features/player';

const usePlayerRegistration = () => {
	const dispatch = useDispatch();
	const player = useSelector((state) => state.player);
	const [getPlayerByName] = useLazyGetPlayerByNameQuery();
	const [registerPlayer, { isLoading, isError }] = useRegisterPlayerMutation();

	const doRegister = async (payload) => {
		try {
			let player;

			try {
				player = await getPlayerByName(payload).unwrap();
			} catch (err) {
				if (err?.status !== 404) throw err;

				player = await registerPlayer(payload).unwrap();
				dispatch(setPlayer(player));
				dispatch(showAlert({ message: `Successfully Registered!`, succeeded: true }));
				return;
			}

			dispatch(setPlayer(player));
			dispatch(
				showAlert({ message: `Welcome back, ${result.player.name}!`, succeeded: true }),
			);
		} catch (error) {
			dispatch(showAlert({ message: getApiErrorMessage(error), succeeded: false }));
		}
	};

	return {
		player,
		state: { isLoading, isError },
		actions: { doRegister },
	};
};

export default usePlayerRegistration;
