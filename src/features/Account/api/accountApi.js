import { api } from '@/core/api';

export const accountApi = api.injectEndpoints({
	endpoints: (builder) => ({
		guestLogin: builder.mutation({
			query: () => ({
				url: `/auth/guest`,
				method: 'POST',
			}),
			providesTags: ['Player'],
		}),
	}),
});

export const { useGuestLoginMutation } = accountApi;
