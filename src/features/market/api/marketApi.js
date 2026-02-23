import { api } from '../../../core/api';

export const marketApi = api.injectEndpoints({
	endpoints: (builder) => ({
		initDailyPrices: builder.query({
			query: ({ id }) => ({
				url: `/market/${id}`,
				method: 'GET',
			}),
			providesTags: ['Market'],
		}),
		initDailyPrices: builder.query({
			query: ({ id }) => ({
				url: `/market/${id}`,
				method: 'GET',
			}),
			providesTags: ['Market'],
		}),
	}),
});

export const { useInitDailyPricesQuery } = marketApi;
