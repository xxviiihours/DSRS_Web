import { shouldFailImmediately } from '@/shared';

const createRetryQuery = (retryFn, baseQuery, config) => {
	const { baseUrl, maxRetries } = config;

	return retryFn(
		async (args, api, extraOptions) => {
			const result = await baseQuery({ baseUrl })(args, api, extraOptions);

			if (result.error && shouldFailImmediately(result.error, api.endpoint)) {
				retryFn.fail(result.error, result.meta);
			}

			return result;
		},
		{
			maxRetries,
		},
	);
};
export default createRetryQuery;
