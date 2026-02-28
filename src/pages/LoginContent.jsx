import { PlayerRegisterForm } from '@/features/player';
import { usePlayerSync } from '@/shared';
import React from 'react';
import { Outlet } from 'react-router';

function LoginContent() {
	const { id } = usePlayerSync();

	// will replace this with the actual auth provider
	if (!id) {
		return <PlayerRegisterForm />;
	}

	return <Outlet />;
}

export default LoginContent;
