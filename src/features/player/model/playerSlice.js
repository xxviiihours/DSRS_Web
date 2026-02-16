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
	initialState: { ...playerState },
	reducers: {
		invalidate: (state, { payload }) => {
			payload.forEach((item) => {
				state[item] = false;
			});
		},
	},
});

export const { invalidate } = playerSlice.actions;
export default playerSlice.reducer;
