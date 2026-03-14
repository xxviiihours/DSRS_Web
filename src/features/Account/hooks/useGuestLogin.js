import { useGuestLoginMutation } from '@/features/Account/api/accountApi';
import { setPlayer } from '@/features/player';
import { getApiErrorMessage, resetAlert, showAlert } from '@/shared';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function useGuestLogin() {
	const [guestLogin, { data, isLoading }] = useGuestLoginMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const doGuestLogin = async () => {
		try {
			const result = await guestLogin().unwrap();

			dispatch(showAlert({ message: `Welcome, ${result.player.name}!`, succeeded: true }));
			dispatch(setPlayer(result.player));
			navigate('/', { replace: true });
		} catch (error) {
			dispatch(showAlert({ message: getApiErrorMessage(error), succeeded: false }));
		}
	};

	return {
		data,
		state: { isLoading },
		actions: { doGuestLogin },
	};
}

export default useGuestLogin;
