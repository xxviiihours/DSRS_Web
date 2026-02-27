import { api } from '@/core/api';

export const playerApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getPlayers: builder.query({
			query: () => ({
				url: '/players',
				method: 'GET',
			}),
			providesTags: ['Players'],
		}),
		getPlayerById: builder.query({
			query: ({ id }) => ({
				url: `/players/${id}`,
				method: 'GET',
			}),
			providesTags: ['Player'],
		}),
		getPlayerByName: builder.query({
			query: ({ name }) => ({
				url: `/players/name/${name}`,
				method: 'GET',
			}),
			extraOptions: { maxRetries: 5 },
			providesTags: ['Player'],
		}),
		registerPlayer: builder.mutation({
			query: (body) => ({
				url: '/players',
				method: 'POST',
				data: body,
			}),
			invalidatesTags: ['Player'],
		}),
	}),
});

export const {
	useGetPlayersQuery,
	useLazyGetPlayerByIdQuery,
	useLazyGetPlayerByNameQuery,
	useRegisterPlayerMutation,
} = playerApi;
