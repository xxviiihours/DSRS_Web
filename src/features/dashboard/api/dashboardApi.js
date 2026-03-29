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
		getBalancePerformance: builder.query({
			query: ({ id }) => ({
				url: `/dashboard/${id}/performance`,
				method: 'GET',
			}),
			providesTags: ['BalancePerformance'],
		}),
		getTotalTrades: builder.query({
			query: ({ id }) => ({
				url: `/dashboard/${id}/total-trades`,
				method: 'GET',
			}),
			providesTags: ['TotalTrades'],
		}),
	}),
});

export const {
	useGetDailyPricesByItemQuery,
	useGetTradeActivitiesQuery,
	useGetBalancePerformanceQuery,
	useGetTotalTradesQuery,
} = dashboardApi;
