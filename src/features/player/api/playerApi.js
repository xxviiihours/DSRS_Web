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
		registerPlayer: builder.mutation({
			query: (body) => ({
				url: '/players',
				method: 'POST',
				data: body,
			}),
			invalidatesTags: ['Players'],
		}),
	}),
});

export const { useGetPlayersQuery, useRegisterPlayerMutation } = playerApi;
