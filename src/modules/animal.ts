import { call, put, takeEvery } from '@redux-saga/core/effects';
import { ActionType, createAction, createReducer } from 'typesafe-actions';
import * as API from '../service/get-data';

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

interface Description {
	animal: DescriptionParams[];
}

interface Test {
	response: DescriptionParams[];
}

// Action Type
const GET_DATA_ASYNC = 'animal/GET_DATA_ASYNC';
const GET_DATA = 'animal/GET_DATA';

//Action Creator
export const getDataAsync = createAction(GET_DATA_ASYNC)();
export const getData = createAction(GET_DATA)<Test>();

const actions = { getData };
type TodoActions = ActionType<typeof actions>;

// Main Saga
export function* animalSaga() {
	yield takeEvery(GET_DATA_ASYNC, getDataSaga);
}

// get Saga
export function* getDataSaga() {
	const response: Test = yield call(API.getAnimal);
	console.log(response);
	yield put(getData(response));
}

//initialState
const initialState: Description = {
	animal: [],
};

//Toolkit Reducer
const animalReducer = createReducer<Description, TodoActions>(initialState, {
	[GET_DATA]: (state, action) => state.animal.concat(action.payload),
});

export default animalReducer;
