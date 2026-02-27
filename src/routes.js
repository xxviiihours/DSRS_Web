import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';

const LoginContent = lazy(() => import('./pages/LoginContent'));
const HomeComponent = lazy(() => import('./pages/HomeContent'));
const InventoryComponent = lazy(() => import('./pages/InventoryContent'));
const PlayerComponent = lazy(() => import('./pages/PlayerContent'));

export const routes = createBrowserRouter([
	{
		path: '/',
		Component: LoginContent,
		children: [
			{
				path: '/',
				index: true,
				Component: HomeComponent,
			},
			{
				path: '/inventory',
				Component: InventoryComponent,
			},
			{
				path: '/player',
				Component: PlayerComponent,
			},
		],
	},
]);
