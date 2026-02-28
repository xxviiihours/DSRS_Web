import axios from 'axios';

export const axiosBaseQuery =
	({ baseUrl } = { baseUrl: '' }) =>
	async ({ url, method, data, params, headers }) => {
		try {
			const result = await axios({
				url: baseUrl + url,
				method,
				data,
				params,
				headers,
			});

			return { data: result.data };
		} catch (error) {
			return {
				error: {
					status: error.response?.status,
					data: error.response?.data || error.message,
				},
				meta: { request: error.request, response: error.response },
			};
		}
	};
