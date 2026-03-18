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
		// upgradeAccount: builder.mutation()
	}),
});

export const { useRegisterAccountMutation } = accountApi;
