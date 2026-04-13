import { createApi } from '@reduxjs/toolkit/query/react';
import { createRtkQueryWithRetry } from '@/core/base/createRtkQueryWithRetry';

const baseQueryWithRetry = createRtkQueryWithRetry({
	baseUrl: 'https://localhost:44387',
	maxRetries: 3,
});

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithRetry,
	tagTypes: [
		'Players',
		'Player',
		'Items',
		'Inventory',
		'DailyPrices',
		'Market',
		'Dashboard',
		'TradeActivities',
		'Leaderboards',
		'BalancePerformance',
		'TotalTrades',
	],
	endpoints: () => ({}),
});
