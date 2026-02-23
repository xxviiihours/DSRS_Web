import { api } from '../../../core/api';

export const playerApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getPlayers: builder.query({
			query: () => ({
				url: '/players',
				method: 'GET',
			}),
			providesTags: ['Players'],
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

export const { useGetPlayersQuery, useLazyGetPlayerByNameQuery, useRegisterPlayerMutation } =
	playerApi;
