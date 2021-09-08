import { createSlice } from '@reduxjs/toolkit';

interface StateType {
	currentPage: string;
}

export const initialState: StateType = {
	currentPage: '',
};

export const pageCheck = createSlice({
	name: 'page',
	initialState,
	reducers: {
		ChangePage: (state, action) => {
			state.currentPage = action.payload;
		},
	},
});

export const page = pageCheck.name;
export const pageReducer = pageCheck.reducer;
export const pageAction = pageCheck.actions;
