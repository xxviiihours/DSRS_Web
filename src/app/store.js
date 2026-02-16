import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../features/player/model/playerSlice';
export const store = configureStore({
	reducer: { playerReducer },
});
