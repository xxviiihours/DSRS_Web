import { createSlice } from '@reduxjs/toolkit';

const playerState = {
	id: '',
	name: '',
	balance: 0,
	inventoryItems: [],
	dailyPrices: [],
};

const playerSlice = createSlice({
	name: 'player',
	initialState: null,
	reducers: {
		setPlayer: (_, action) => action.payload,
		clearPlayer: (state) => null,
	},
});

export const { setPlayer, clearPlayer } = playerSlice.actions;
export default playerSlice.reducer;
