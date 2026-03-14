import {
	useGuestLoginMutation,
	useUserLoginMutation,
} from '@/features/Account/api/accountApi';
import { setPlayer } from '@/features/player';
import { getApiErrorMessage, showAlert } from '@/shared';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const useAccountLogin = () => {
	const [guestLogin, { isLoading: isGuestLoading }] = useGuestLoginMutation();
	const [userLogin, { isLoading: isUserLoading }] = useUserLoginMutation();
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

	const doUserLogin = async ({ username, password }) => {
		try {
			const result = await userLogin({ username, password }).unwrap();
			dispatch(setPlayer(result.player));
			dispatch(showAlert({ message: `Welcome, ${result.player.name}!`, succeeded: true }));
			navigate('/', { replace: true });
		} catch (error) {
			dispatch(showAlert({ message: getApiErrorMessage(error), succeeded: false }));
		}
	};

	return {
		state: { isGuestLoading, isUserLoading },
		actions: { doGuestLogin, doUserLogin },
	};
};

export default useAccountLogin;
