import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnimalType {
	selected: {
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
	};
	isSelect: boolean;
}

interface PayloadType {
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

export const initialState: AnimalType = {
	selected: {
		age: 0,
		careAddr: '',
		careNm: '',
		careTel: '',
		chargeNm: '',
		colorCd: '',
		desertionNo: 0,
		filename: '',
		happenDt: 0,
		happenPlace: '',
		kindCd: '',
		neuterYn: '',
		noticeEdt: 0,
		noticeNo: '',
		noticeSdt: 0,
		officetel: '',
		orgNm: '',
		popfile: '',
		processState: '',
		sexCd: '',
		specialMark: '',
		weight: '',
	},
	isSelect: false,
};

export const selectAnimal = createSlice({
	name: 'select',
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<PayloadType>) => {
			// state.selected = action.payload;
			console.log(action.payload);
			state.isSelect = true;
			state.selected = action.payload;
		},
		cleseModal: (state) => {
			state.isSelect = false;
		},
	},
});

export const select = selectAnimal.name;
export const selectReducer = selectAnimal.reducer;
export const selectAction = selectAnimal.actions;
