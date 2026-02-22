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
		} catch (axiosError) {
			return {
				error: {
					status: axiosError.response?.status,
					data: axiosError.response?.data || axiosError.message,
				},
			};
		}
	};
