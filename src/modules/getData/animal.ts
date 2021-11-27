import { AnimalType, Description, ParamType } from './../../types/type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

//initialState
export const initialState: Description = {
	animal: [],
	isLoading: false,
	error: null,
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
		},
		getDataFailure: (state, { payload: error }) => {
			state.isLoading = false;
			state.animal.length = 0;
			state.error = error;
		},
		getData: (state, action: PayloadAction<ParamType>) => {
			const { city, kind } = state.param;
			if (city !== action.payload.city || kind !== action.payload.kind) {
				state.isLoading = false;
			} else {
			}
			state.param = action.payload;
		},
	},
});

export const animal = getAnimal.name;
export const animalReducer = getAnimal.reducer;
export const animalAction = getAnimal.actions;
