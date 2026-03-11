import { PlayerRegisterForm } from '@/features/player';
import { useAuthProvider } from '@/providers';
import React from 'react';
import { Outlet } from 'react-router';

function LoginContent() {
	const { player } = useAuthProvider();

	// will replace this with the actual auth provider
	if (!player) {
		return <PlayerRegisterForm />;
	}

	return <Outlet />;
}

export default LoginContent;
