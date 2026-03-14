import { configureStore } from '@reduxjs/toolkit';
import { api } from '@/core/api';
import { playerReducer } from '@/features/player';
import { itemReducer } from '@/features/market';
import { alertReducer } from '@/shared';

export const store = configureStore({
	reducer: {
		player: playerReducer,
		item: itemReducer,
		alert: alertReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
