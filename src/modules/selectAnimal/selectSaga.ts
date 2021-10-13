import { selectAction } from './select';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import * as API from '../../service/bookmark';

interface BookmarkType {
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
}

interface AddType {
	userId: string;
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
}

interface RemoveType {
	userId: string;
	bookmarkId: number;
}

// get Saga
export function* getSaga(action: { payload: string }) {
	const { GetBookmarkSuccess, BookmarkFailure } = selectAction;
	const userId = action.payload;
	try {
		const response: BookmarkType = yield call(API.syncBookmark, userId); // call은 api를 call해서 data를 받아옴
		yield put(GetBookmarkSuccess(response));
		// put은 dispatch 를 뜻한다.
	} catch (err) {
		yield put(BookmarkFailure(err));
	}
}

export function* addSaga(action: { payload: AddType }) {
	const { AddBookmarkSuccess, BookmarkFailure } = selectAction;
	const userId = action.payload.userId;
	const bookmark = action.payload.bookmark;
	try {
		yield call(API.addBookmark, userId, bookmark); // call은 api를 call해서 data를 받아옴
		yield put(AddBookmarkSuccess());
		// put은 dispatch 를 뜻한다.
	} catch (err) {
		yield put(BookmarkFailure(err));
	}
}

export function* removeSaga(action: { payload: RemoveType }) {
	const { RemoveBookmarkSuccess, BookmarkFailure } = selectAction;
	const userId = action.payload.userId;
	const bookmarkId = action.payload.bookmarkId;
	try {
		yield call(API.removeBookmark, userId, bookmarkId); // call은 api를 call해서 data를 받아옴
		yield put(RemoveBookmarkSuccess(bookmarkId));
		// put은 dispatch 를 뜻한다.
	} catch (err) {
		yield put(BookmarkFailure(err));
	}
}

// Main Saga
export function* getBookmarkSaga() {
	const { GetBookmark } = selectAction;
	yield takeEvery(GetBookmark, getSaga);
}

// Main Saga
export function* addBookmarkSaga() {
	const { AddBookmark } = selectAction;
	yield takeEvery(AddBookmark, addSaga);
}

// Main Saga
export function* removeBookmarkSaga() {
	const { RemoveBookmark } = selectAction;
	yield takeEvery(RemoveBookmark, removeSaga);
}
