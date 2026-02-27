import { PlayerRegisterForm } from '@/features/player';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';

function LoginContent() {
	const player = useSelector((state) => state.player);

	// will replace this with the actual auth provider
	if (!player) {
		return <PlayerRegisterForm />;
	}

	return <Outlet />;
}

export default LoginContent;
