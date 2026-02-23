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
	},
});

export const { setPlayer } = playerSlice.actions;
export default playerSlice.reducer;
