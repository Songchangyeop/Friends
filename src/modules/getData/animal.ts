import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// 받아오는 api Data의 type
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
	param: {
		city: number;
		kind: number | undefined;
		page: number;
		isIntersecting?: boolean;
	};
}

interface ParamType {
	city: number;
	kind: number | undefined;
	page: number;
	isIntersecting?: boolean;
}

//initialState
export const initialState: Description = {
	animal: [],
	isLoading: true,
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
		getDataSuccess: (state, action: PayloadAction<DescriptionParams>) => {
			state.animal.length = 0;
			const newState = state.animal.concat(action.payload);
			state.animal = newState;
			state.isLoading = true;
		},
		getDataFailure: (state, { payload: error }) => {
			console.log('fail');
			state.isLoading = false;
			state.animal.length = 0;
			state.error = error;
		},
		getData: (state, action: PayloadAction<ParamType>) => {
			const { city, kind } = state.param;
			if (city !== action.payload.city || kind !== action.payload.kind) {
				state.isLoading = false;
			}
			state.param = action.payload;
		},
	},
});

export const animal = getAnimal.name;
export const animalReducer = getAnimal.reducer;
export const animalAction = getAnimal.actions;
