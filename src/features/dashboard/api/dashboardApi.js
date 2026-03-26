import { api } from '@/core/api';

export const dashboardApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getDailyPricesByItem: builder.query({
			query: ({ itemId, playerId }) => ({
				url: `/dashboard/${playerId}/daily-prices?itemId=${itemId}`,
				method: 'GET',
			}),
			providesTags: ['Dashboard'],
		}),
		getTradeActivities: builder.query({
			query: ({ id }) => ({
				url: `/dashboard/${id}/trade-activities`,
				method: 'GET',
			}),
			providesTags: ['TradeActivities'],
		}),
	}),
});

export const { useGetDailyPricesByItemQuery, useGetTradeActivitiesQuery } = dashboardApi;
