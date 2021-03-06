import { firebaseApp } from './../../service/firebase';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDatabase, ref, set, remove, off } from 'firebase/database';
import {
	SelectStateType,
	AnimalType,
	AddType,
	RemoveType,
} from '../../types/type';

export const initialState: SelectStateType = {
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
	error: null,
	isSelect: false,
	checkMessage: '',
	isCheckOpen: false,
};

export const selectAnimal = createSlice({
	name: 'select',
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<AnimalType>) => {
			state.isSelect = true;
			state.selected = action.payload;
		},

		closeModal: (state) => {
			state.isSelect = false;
		},

		CloseCheck: (state, action) => {
			state.isCheckOpen = action.payload;
		},

		AddBookmark: (state, action: PayloadAction<AddType>) => {
			const db = getDatabase(firebaseApp);
			const userId = action.payload.userId;
			const bookmark = action.payload.bookmark;
			state.checkMessage = '찜 했습니다';
			state.isCheckOpen = true;
			set(ref(db, `${userId}/bookmark/${bookmark.desertionNo}`), {
				bookmark,
			});
			state.isSelect = true;
		},

		RemoveBookmark: (state, action: PayloadAction<RemoveType>) => {
			const db = getDatabase(firebaseApp);
			const userId = action.payload.userId;
			const bookmarkId = action.payload.bookmarkId;
			remove(ref(db, `${userId}/bookmark/${bookmarkId}`));
			state.isSelect = false;
		},

		GetBookmark: (state, action: { payload: AnimalType[] }) => {
			const response = action.payload;
			state.bookmark.length = 0;
			state.bookmark = response;
		},
	},
});

export const select = selectAnimal.name;
export const selectReducer = selectAnimal.reducer;
export const selectAction = selectAnimal.actions;
