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
	}),
});

export const { useLazyInitAuthenticationQuery } = authApi;
