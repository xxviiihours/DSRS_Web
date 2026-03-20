import { api } from '@/core/api';

export const accountApi = api.injectEndpoints({
	endpoints: (builder) => ({
		registerAccount: builder.mutation({
			query: (body) => ({
				url: '/accounts/register',
				method: 'POST',
				data: body,
			}),
			invalidatesTags: ['Player'],
		}),
		upgradeAccount: builder.mutation({
			query: (body) => ({
				url: `/accounts/${body.id}`,
				method: 'PATCH',
				data: body,
			}),
			invalidatesTags: ['Player'],
		}),
	}),
});

export const { useRegisterAccountMutation, useUpgradeAccountMutation } = accountApi;
