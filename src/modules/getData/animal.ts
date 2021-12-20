import { AnimalType, Description, ParamType } from './../../types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const initialState: Description = {
	animal: [],
	isLoading: false,
	isError: false,
	param: {
		city: 0,
		kind: 0,
		page: 1,
	},
};

export const getAnimal = createSlice({
	name: 'animal',
	initialState,
	reducers: {
		getDataSuccess: (state, action: PayloadAction<AnimalType>) => {
			state.animal.length = 0;
			const newState = state.animal.concat(action.payload);
			state.animal = newState;
			state.isLoading = true;
			state.isError = false;
		},
		getDataFailure: (state, { payload: error }) => {
			state.isLoading = false;
			state.animal.length = 0;
			state.isError = true;
			console.log(error);
		},
		getData: (state, action: PayloadAction<ParamType>) => {
			const { city, kind } = state.param;
			if (city !== action.payload.city || kind !== action.payload.kind) {
				state.isLoading = false;
			}
			state.param = action.payload;
		},
		initError: (state) => {
			state.isError = false;
		},
	},
});

export const animal = getAnimal.name;
export const animalReducer = getAnimal.reducer;
export const animalAction = getAnimal.actions;
