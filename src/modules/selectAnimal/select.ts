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
	isPageOpen: boolean;
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
	isPageOpen: false,
};

export const selectAnimal = createSlice({
	name: 'select',
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<BookmarkAnimalType>) => {
			// state.selected = action.payload;
			state.isSelect = true;
			state.selected = action.payload;
		},
		closeModal: (state) => {
			state.isSelect = false;
		},
		AddBookmark: (state, action: PayloadAction<BookmarkAnimalType>) => {
			const { bookmark } = state;

			if (
				bookmark.findIndex(
					(item) => item.desertionNo === action.payload.desertionNo
				) >= 0
			) {
				alert('이미 찜 한 동물입니다');
				return;
			}

			const newState = bookmark.concat(action.payload);
			state.bookmark = newState;
			alert('찜 했습니다');
		},
		RemoveBookmark: (state, action) => {
			const newState = state.bookmark.filter(
				(item) => item.desertionNo !== action.payload
			);
			state.bookmark = newState;
			alert('제거 되었습니다');
			state.isSelect = false;
		},
		PageOpen: (state, action) => {
			state.isPageOpen = action.payload;
			console.log(state.isPageOpen);
		},
	},
});

export const select = selectAnimal.name;
export const selectReducer = selectAnimal.reducer;
export const selectAction = selectAnimal.actions;
