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
		purchaseItem: builder.mutation({
			query: ({ playerId, ...body }) => ({
				url: `/market/${playerId}`,
				method: 'POST',
				data: body,
			}),
			invalidatesTags: ['Players', 'Inventory'],
		}),
	}),
});

export const { useInitDailyPricesQuery, usePurchaseItemMutation } = marketApi;
