import { api } from '@/core/api';

export const leaderboardApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getTop20PlayersById: builder.query({
			query: ({ id }) => ({
				url: `/leaderboards/top20/${id}`,
				method: 'GET',
			}),
			providesTags: ['Player'],
		}),
	}),
});

export const { useGetTop20PlayersByIdQuery } = leaderboardApi;
