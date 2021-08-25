import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnimalType {
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

interface StateType {
	bookmark: AnimalType[];
	isPageOpen: boolean;
}

export const initialState: StateType = {
	bookmark: [],
	isPageOpen: false,
};

export const bookmarkAnimal = createSlice({
	name: 'bookmark',
	initialState,
	reducers: {
		AddBookmark: (state, action: PayloadAction<AnimalType>) => {
			const { bookmark } = state;

			if (
				bookmark.findIndex(
					(item) => item.desertionNo === action.payload.desertionNo
				) >= 0
			) {
				console.log('겹치지 않음');
				return;
			}

			const newState = bookmark.concat(action.payload);
			state.bookmark = newState;
			console.log(state.bookmark);
		},
		RemoveBookmark: (state, action) => {
			state.bookmark.filter((item) => item.desertionNo !== action.payload);
		},
		PageOpen: (state, action) => {
			state.isPageOpen = action.payload;
			console.log(state.isPageOpen);
		},
	},
});

export const bookmark = bookmarkAnimal.name;
export const bookmarkReducer = bookmarkAnimal.reducer;
export const bookmarkAction = bookmarkAnimal.actions;
