import { createBrowserRouter } from 'react-router';
import { lazy } from 'react';

const HomeComponent = lazy(() => import('./pages/HomeContent'));
const InventoryComponent = lazy(() => import('./pages/InventoryContent'));
const PlayerComponent = lazy(() => import('./pages/PlayerContent'));

export const routes = createBrowserRouter([
	{
		path: '/',
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
]);
