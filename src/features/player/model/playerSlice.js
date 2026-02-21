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
		register: (state, action) => {
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.balance = action.payload.balance;
			state.inventoryItems.push(action.payload.inventoryItems);
			state.dailyPrices.push(action.payload.dailyPrices);
		},
	},
});

export const { register } = playerSlice.actions;
export default playerSlice.reducer;
