import { api } from '@/core/api';

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		initAuthentication: builder.query({
			query: () => ({
				url: `/auth/init`,
				method: 'GET',
			}),
			providesTags: ['Player'],
		}),
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
		logout: builder.mutation({
			query: () => ({
				url: '/auth/logout',
				method: 'POST',
			}),
		}),
	}),
});

export const {
	useLazyInitAuthenticationQuery,
	useGuestLoginMutation,
	useUserLoginMutation,
	useLogoutMutation,
} = authApi;
