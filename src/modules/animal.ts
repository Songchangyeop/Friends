import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 받아오는 api Data의 type들
interface DescriptionParams {
	age: number;
	careAddr: string;
	careNm: string;
	careTel: string;
	chargeNm: string;
	colorCd: string;
	desertionNo: number;
	filename: string;
	happenDt: number;
	happenPlace: string;
	kindCd: string;
	neuterYn: string;
	noticeEdt: number;
	noticeNo: string;
	noticeSdt: number;
	officetel: string;
	orgNm: string;
	popfile: string;
	processState: string;
	sexCd: string;
	specialMark: string;
	weight: string;
}

// state의 타입
interface Description {
	animal: DescriptionParams[];
	isLoading: boolean;
	error: null;
}

interface ParamType {
	city: number;
}

//initialState
export const initialState: Description = {
	animal: [],
	isLoading: false,
	error: null,
};

export const slice = createSlice({
	name: 'animal',
	initialState,
	reducers: {
		getDataSuccess: (state, action: PayloadAction<DescriptionParams>) => {
			state.isLoading = true;
			state.animal.length = 0;
			const newState = state.animal.concat(action.payload);
			state.animal = newState;
		},
		getDataFailure: (state, { payload: error }) => {
			state.isLoading = false;
			state.error = error;
		},
		getData: (state, action: PayloadAction<ParamType>) => {
			state.isLoading = false;
		},
	},
});

//Toolkit Reducer
// const animalReducer = createReducer<Description, TodoActions>(initialState, {
// 	[GET_DATA]: (state, action) => state.animal.concat(action.payload),
// });

export const animal = slice.name;
export const animalReducer = slice.reducer;
export const animalAction = slice.actions;
