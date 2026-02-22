import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../features/player/model/playerSlice';
import { api } from '../core/api';
import '../features/player/api/playerApi';

export const store = configureStore({
	reducer: {
		player: playerReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
