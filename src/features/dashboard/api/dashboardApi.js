import { api } from '../../../core/api';

export const dashboardApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getDailyPricesByItem: builder.query({
			query: ({ itemId, playerId }) => ({
				url: `/dashboard/${itemId}/${playerId}`,
				method: 'GET',
			}),
			providesTags: ['Dashboard'],
		}),
	}),
});

export const { useGetDailyPricesByItemQuery } = dashboardApi;
