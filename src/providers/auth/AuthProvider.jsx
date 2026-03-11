import { setPlayer } from '@/features/player';
import { useLazyInitAuthenticationQuery } from '@/providers/auth/api/authApi';
import { createContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const AuthContext = createContext(null);

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
			console.error('Auth init failed', err);
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
