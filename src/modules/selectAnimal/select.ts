import { firebaseApp } from './../../service/firebase';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

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
	checkMessage: string;
	isCheckOpen: boolean;
	bookmark: BookmarkAnimalType[];
	error: null;
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

interface RemoveType {
	userId: string;
	bookmarkId: number;
}

interface AddType {
	bookmark: {
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
	userId: string;
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
	error: null,
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
		},

		RemoveBookmark: (state, action: PayloadAction<RemoveType>) => {
			const db = getDatabase(firebaseApp);
			const userId = action.payload.userId;
			const bookmarkId = action.payload.bookmarkId;
			const newState = state.bookmark.filter(
				(item) => item.desertionNo !== action.payload.bookmarkId
			);
			state.bookmark = newState;
			state.isSelect = false;
			remove(ref(db, `${userId}/bookmark/${bookmarkId}`));
		},

		GetBookmark: (state, action: { payload: string }) => {
			try {
				const db = getDatabase(firebaseApp);
				const { bookmark } = state;
				const query = ref(db, `${action.payload}/bookmark`);
				let response: BookmarkAnimalType[] = [];
				let temp: any[] = [];
				onValue(query, (snapshot) => {
					const value = snapshot.val();
					Object.entries(value).map((item) => {
						temp = [...item];
						response = [...response, temp[1].bookmark];
					});

					// const newState = bookmark.concat(response);
					// console.log(newState);
					console.log(response);
					state.bookmark = response;
					return () => off(query);
				});
			} catch (error) {
				console.log(error);
			}
		},
	},
});

export const select = selectAnimal.name;
export const selectReducer = selectAnimal.reducer;
export const selectAction = selectAnimal.actions;
