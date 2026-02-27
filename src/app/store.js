import { configureStore } from '@reduxjs/toolkit';
import { api } from '@/core/api';
import { playerReducer } from '@/features/player';
import { itemReducer } from '@/features/market';

export const store = configureStore({
	reducer: {
		player: playerReducer,
		item: itemReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
