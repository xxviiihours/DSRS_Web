import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
	name: 'alert',
	initialState: {
		show: false,
		message: '',
		succeeded: false,
	},
	reducers: {
		showAlert: (state, action) => {
			state.show = true;
			state.message = action.payload.message;
			state.succeeded = action.payload.succeeded;
		},
		resetAlert: (state) => {
			state.show = false;
		},
	},
});

export const { showAlert, resetAlert } = alertSlice.actions;
export default alertSlice.reducer;
