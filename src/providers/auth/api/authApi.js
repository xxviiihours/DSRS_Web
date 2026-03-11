import { api } from '@/core/api';

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		initAuthentication: builder.query({
			query: () => ({
				url: `/auth/init`,
				method: 'GET',
			}),
			providesTags: ['Auth'],
		}),
		guestLogin: builder.mutation({
			query: () => ({
				url: `/auth/guest`,
				method: 'POST',
			}),
			providesTags: ['GuestLogin'],
		}),
	}),
});

export const { useLazyInitAuthenticationQuery, useGuestLoginMutation } = authApi;
