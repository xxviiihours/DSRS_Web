import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';

const LoginContent = lazy(() => import('./pages/LoginContent'));

const AuthGuard = lazy(() => import('./guards/AuthGuard'));
const HomeContent = lazy(() => import('./pages/HomeContent'));
const InventoryContent = lazy(() => import('./pages/InventoryContent'));
const PlayerContent = lazy(() => import('./pages/PlayerContent'));

export const routes = createBrowserRouter([
	{
		path: '/login',
		Component: LoginContent,
	},
	{
		Component: AuthGuard,
		children: [
			{
				path: '/',
				index: true,
				Component: HomeContent,
			},
			{
				path: '/home',
				Component: HomeContent,
			},
			{
				path: '/inventory',
				Component: InventoryContent,
			},
			{
				path: '/player',
				Component: PlayerContent,
			},
		],
	},
]);
