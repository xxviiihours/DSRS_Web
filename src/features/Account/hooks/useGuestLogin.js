import { useGuestLoginMutation } from '@/features/Account/api/accountApi';
import { setPlayer } from '@/features/player';
import { getApiErrorMessage } from '@/shared';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

function useGuestLogin() {
	const [guestLogin, { data, isError, isLoading }] = useGuestLoginMutation();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [state, setState] = useState({
		status: 'idle',
		message: '',
	});

	const doGuestLogin = async () => {
		try {
			const result = await guestLogin().unwrap();
			setState({
				status: 'success',
				message: `Welcome, ${result.player.name}!`,
			});
			dispatch(setPlayer(result.player));
			navigate('/', { replace: true });
		} catch (error) {
			setState({
				status: 'error',
				message: getApiErrorMessage(error),
			});
		}
	};
	const reset = () => {
		setState({ type: '', status: 'idle', message: '' });
	};

	const isSuccess = state.status === 'success';

	return {
		data,
		state: { isError, isLoading, isSuccess, ...state },
		actions: { doGuestLogin, reset },
	};
}

export default useGuestLogin;
