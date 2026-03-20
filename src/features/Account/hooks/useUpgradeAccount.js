import { useUpgradeAccountMutation } from '@/features/Account/api/accountApi';
import { useAuthProvider } from '@/providers';
import { getApiErrorMessage, resetAlert, showAlert } from '@/shared';
import { useDispatch } from 'react-redux';

const useUpgradeAccount = () => {
	const dispatch = useDispatch();
	const [upgradeAccount, { data, isLoading, isError }] = useUpgradeAccountMutation();
	const { actions } = useAuthProvider();

	const doUpgradeAccount = async (id, payload) => {
		try {
			await upgradeAccount({ id, ...payload }).unwrap();
			const result = await actions.doLogout();
			if (result.succeeded) {
				dispatch(
					showAlert({ message: `You are now registered! Please re-login.`, succeeded: true }),
				);
			}
			return {
				succeeded: true,
				redirectUrl: '/login',
			};
		} catch (error) {
			dispatch(showAlert({ message: getApiErrorMessage(error), succeeded: false }));
			return {
				succeeded: false,
			};
		}
	};

	const doReset = () => {
		dispatch(resetAlert());
	};
	return { data, state: { isLoading, isError }, actions: { doUpgradeAccount, doReset } };
};

export default useUpgradeAccount;
