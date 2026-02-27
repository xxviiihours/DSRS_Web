import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './base/axiosBaseQuery';

const baseQueryWithRetry = retry(axiosBaseQuery({ baseUrl: 'http://localhost:5223' }), {
	maxRetries: 3,
});

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithRetry,
	tagTypes: ['Players', 'Player', 'Items', 'Inventory', 'DailyPrices', 'Market', 'Dashboard'],
	endpoints: () => ({}),
});
