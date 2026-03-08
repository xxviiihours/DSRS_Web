import { api } from '@/core/api';

export const playerApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getPlayers: builder.query({
			query: (params = {}) => {
				const { query } = params;

				return {
					url: `/players${query ? `?query=${query}` : ''}`,
					method: 'GET',
				};
			},
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
	useLazyGetPlayersQuery,
	useGetPlayerByIdQuery,
	useLazyGetPlayerByIdQuery,
	useLazyGetPlayerByNameQuery,
	useRegisterPlayerMutation,
} = playerApi;
