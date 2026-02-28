import { createApi, retry } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from './base/axiosBaseQuery';

const baseQueryWithRetry = retry(
	async (args, api, extraOptions) => {
		const result = await axiosBaseQuery({ baseUrl: 'http://localhost:5223' })(
			args,
			api,
			extraOptions,
		);
		if (result.error?.status === 401) {
			retry.fail(result.error, result.meta);
		}
		if (result.error?.status === 400) {
			retry.fail(result.error, result.meta);
		}

		return result;
	},
	{
		maxRetries: 3,
	},
);

export const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithRetry,
	tagTypes: ['Players', 'Player', 'Items', 'Inventory', 'DailyPrices', 'Market', 'Dashboard'],
	endpoints: () => ({}),
});
