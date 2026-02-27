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
			invalidatesTags: ['Players', 'Inventory', 'Player'],
		}),
		sellItem: builder.mutation({
			query: ({ playerId, ...body }) => ({
				url: `/market/${playerId}`,
				method: 'PUT',
				data: body,
			}),
			invalidatesTags: ['Players', 'Inventory', 'Player'],
		}),
	}),
});

export const { useInitDailyPricesQuery, usePurchaseItemMutation, useSellItemMutation } =
	marketApi;
