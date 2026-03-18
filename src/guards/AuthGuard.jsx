import { useAuthProvider } from '@/providers';
import { TheLoaderDefault } from '@/shared';
import React from 'react';
import { Navigate, Outlet } from 'react-router';

function AuthGuard() {
	const { data, state } = useAuthProvider();

	if (!state.isReady) return <TheLoaderDefault />;

	if (!data.player) return <Navigate to={'/login'} replace />;

	return <Outlet />;
}

export default AuthGuard;
