import { useAuthProvider } from '@/providers/auth/hooks/useAuthProvider';
import { TheLoaderDefault } from '@/shared/components';
import React from 'react';
import { Navigate, Outlet } from 'react-router';

function AuthGuard() {
	const { data, state } = useAuthProvider();

	if (!state.isReady) return <TheLoaderDefault />;

	if (!data.player) return <Navigate to={'/login'} replace />;

	return <Outlet />;
}

export default AuthGuard;
