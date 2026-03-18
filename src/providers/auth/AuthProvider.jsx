import { clearPlayer, setPlayer } from '@/features/player';
import { AuthContext } from '@/providers';
import {
	useGuestLoginMutation,
	useLazyInitAuthenticationQuery,
	useLogoutMutation,
	useUserLoginMutation,
} from '@/providers/auth/api/authApi';
import { getApiErrorMessage, showAlert } from '@/shared';
import { skipToken } from '@reduxjs/toolkit/query';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const AuthProvider = ({ children }) => {
	const player = useSelector((state) => state.player);
	const [isReady, setIsReady] = useState(false);
	const dispatch = useDispatch();

	const [initAuthentication] = useLazyInitAuthenticationQuery(isReady ? undefined : skipToken);

	const [userLogin, { isLoading: isUserLoading }] = useUserLoginMutation();
	const [guestLogin, { isLoading: isGuestLoading }] = useGuestLoginMutation();
	const [logout] = useLogoutMutation();

	const doInitAuthentication = async () => {
		try {
			const result = await initAuthentication().unwrap();
			dispatch(setPlayer(result.player));
		} catch (err) {
		} finally {
			setIsReady(true);
		}
	};

	const doGuestLogin = async () => {
		try {
			const result = await guestLogin().unwrap();

			dispatch(showAlert({ message: `Welcome, ${result.player.name}!`, succeeded: true }));
			dispatch(setPlayer(result.player));

			return {
				succeeded: true,
			};
		} catch (error) {
			dispatch(showAlert({ message: getApiErrorMessage(error), succeeded: false }));
			return {
				succeeded: false,
			};
		}
	};

	const doUserLogin = async ({ username, password }) => {
		try {
			const result = await userLogin({ username, password }).unwrap();
			dispatch(setPlayer(result.player));
			dispatch(showAlert({ message: `Welcome, ${result.player.name}!`, succeeded: true }));

			return {
				succeeded: true,
			};
		} catch (error) {
			dispatch(showAlert({ message: getApiErrorMessage(error), succeeded: false }));
			return {
				succeeded: false,
			};
		}
	};

	const doLogout = async () => {
		try {
			await logout().unwrap();
			dispatch(clearPlayer());
			dispatch(showAlert({ message: `You have been logged out.`, succeeded: true }));
			return {
				succeeded: true,
			};
		} catch (error) {
			getApiErrorMessage(error);
			return {
				succeeded: false,
			};
		}
	};

	useEffect(() => {
		doInitAuthentication();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				data: { player },
				state: { isGuestLoading, isUserLoading, isReady },
				actions: { doUserLogin, doGuestLogin, doLogout },
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
