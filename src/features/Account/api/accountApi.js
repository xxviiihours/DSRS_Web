import { api } from '@/core/api';

export const accountApi = api.injectEndpoints({
	endpoints: (builder) => ({
		guestLogin: builder.mutation({
			query: () => ({
				url: `/auth/guest`,
				method: 'POST',
			}),
			invalidatesTags: ['Player'],
		}),
		userLogin: builder.mutation({
			query: (body) => ({
				url: '/auth/login',
				method: 'POST',
				data: body,
			}),
			invalidatesTags: ['Player'],
		}),
	}),
});

export const { useGuestLoginMutation, useUserLoginMutation } = accountApi;
