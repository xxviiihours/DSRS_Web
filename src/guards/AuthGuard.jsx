import { useAuthProvider } from '@/providers';
import { TheLoaderDefault } from '@/shared';
import React from 'react';
import { Navigate, Outlet } from 'react-router';

function AuthGuard() {
	const { player, loading } = useAuthProvider();
	if (loading) return <TheLoaderDefault />;

	if (!player) return <Navigate to={'/login'} replace />;

	return <Outlet />;
}

export default AuthGuard;
