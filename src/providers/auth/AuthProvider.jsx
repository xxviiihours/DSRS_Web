import { setPlayer } from '@/features/player';
import { AuthContext } from '@/providers';
import { useLazyInitAuthenticationQuery } from '@/providers/auth/api/authApi';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const AuthProvider = ({ children }) => {
	const player = useSelector((state) => state.player);
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const [initAuthentication] = useLazyInitAuthenticationQuery();

	const doInitAuthentication = async () => {
		try {
			const result = await initAuthentication().unwrap();
			dispatch(setPlayer(result));
		} catch (err) {
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		doInitAuthentication();
	}, []);

	return <AuthContext.Provider value={{ player, loading }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
