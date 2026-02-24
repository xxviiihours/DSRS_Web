import { createSlice } from '@reduxjs/toolkit';

const itemState = {
	id: '',
	name: '',
	balance: 0,
	inventoryItems: [],
	dailyPrices: [],
};

const itemSlice = createSlice({
	name: 'item',
	initialState: null,
	reducers: {
		setItem: (_, action) => action.payload,
	},
});

export const { setItem } = itemSlice.actions;
export default itemSlice.reducer;
