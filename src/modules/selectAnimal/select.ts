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
	bookmark: BookmarkAnimalType[];
	checkMessage: string;
	isCheckOpen: boolean;
}

interface BookmarkAnimalType {
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
	bookmark: [],
	isSelect: false,
	checkMessage: '',
	isCheckOpen: false,
};

export const selectAnimal = createSlice({
	name: 'select',
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<BookmarkAnimalType>) => {
			state.isSelect = true;
			state.selected = action.payload;
		},

		closeModal: (state) => {
			state.isSelect = false;
		},

		AddBookmark: (state, action: PayloadAction<BookmarkAnimalType>) => {
			const { bookmark } = state;
			const newState = bookmark.concat(action.payload);
			state.bookmark = newState;
			state.checkMessage = '찜 했습니다';
			state.isCheckOpen = true;
		},

		RemoveBookmark: (state, action) => {
			const newState = state.bookmark.filter(
				(item) => item.desertionNo !== action.payload
			);
			state.bookmark = newState;
			state.isSelect = false;
		},

		CloseCheck: (state, action) => {
			state.isCheckOpen = action.payload;
		},
	},
});

export const select = selectAnimal.name;
export const selectReducer = selectAnimal.reducer;
export const selectAction = selectAnimal.actions;
