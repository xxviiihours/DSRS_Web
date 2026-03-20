import { useRegisterAccountMutation } from '@/features/Account/api/accountApi';
import { setPlayer } from '@/features/player';
import { getApiErrorMessage, showAlert } from '@/shared';
import { useDispatch } from 'react-redux';

const useRegisterAccount = () => {
	const dispatch = useDispatch();

	const [registerAccount, { isLoading }] = useRegisterAccountMutation();

	const doRegisterAccount = async (payload) => {
		try {
			const result = await registerAccount(payload).unwrap();

			dispatch(showAlert({ message: `You are now registered!`, succeeded: true }));
			dispatch(setPlayer(result.player));

			return {
				succeeded: true,
				redirectUrl: '/login',
			};
		} catch (error) {
			dispatch(showAlert({ message: getApiErrorMessage(error), succeeded: false }));
			return {
				succeeded: false,
				redirectUrl: '',
			};
		}
	};
	return {
		data: {},
		state: { isLoading },
		actions: { doRegisterAccount },
	};
};

export default useRegisterAccount;
