import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './base/axiosBaseQuery';
import createRetryQuery from '@/core/base/createRetryQuery';

const baseQueryWithRetry = createRetryQuery(retry, axiosBaseQuery, {
	baseUrl: 'https://localhost:44387',
	maxRetries: 3,
});

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithRetry,
	tagTypes: ['Players', 'Player', 'Items', 'Inventory', 'DailyPrices', 'Market', 'Dashboard'],
	endpoints: () => ({}),
});
