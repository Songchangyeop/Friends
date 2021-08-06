import { animalAction } from './animal';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import * as API from '../../service/get-data';

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

interface ParamType {
	city: number;
	kind: number | undefined;
	page: number;
}

// get Saga
export function* getDataSaga(action: { payload: ParamType }) {
	const { getDataSuccess, getDataFailure } = animalAction;
	const param = action.payload;
	try {
		const response: DescriptionParams = yield call(API.getAnimal, param); // call은 api를 call해서 data를 받아옴
		yield put(getDataSuccess(response));
		// put은 dispatch 를 뜻한다.
	} catch (err) {
		yield put(getDataFailure(err));
	}
}

// Main Saga
export function* animalSaga() {
	const { getData } = animalAction;
	yield takeEvery(getData, getDataSaga);
}
