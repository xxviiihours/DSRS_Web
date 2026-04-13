import { shouldFailImmediately } from '@/shared/utils';
import { fetchBaseQuery, retry } from '@reduxjs/toolkit/query';

export const createRtkQueryWithRetry = ({ baseUrl, maxRetries = 3 }) => {
	const rawBaseQuery = fetchBaseQuery({
		baseUrl,
		credentials: 'include',
	});

	const baseQueryWithRetry = retry(
		async (args, api, extraOptions) => {
			const { data, ...rest } = args;
			const result = await rawBaseQuery(
				{ ...rest, ...(data !== undefined && { body: data }) },
				api,
				extraOptions,
			);

			if (result.error) {
				const normalizedError = {
					status: result.error.status,
					data: result.error.data || result.error.error,
				};

				if (shouldFailImmediately(normalizedError, api.endpoint)) {
					retry.fail(normalizedError, result.meta);
				}

				return {
					error: normalizedError,
					meta: result.meta,
				};
			}

			return {
				data: result.data,
				meta: result.meta,
			};
		},
		{
			maxRetries,
		},
	);

	return baseQueryWithRetry;
};
