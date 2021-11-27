import { AnimalType, ParamType } from './../../types/type';
import { animalAction } from './animal';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import * as API from '../../service/get-data';

// get Saga
export function* getDataSaga(action: { payload: ParamType }) {
	const { getDataSuccess, getDataFailure } = animalAction;
	const param = action.payload;
	try {
		const response: AnimalType = yield call(API.getAnimal, param); // call은 api를 call해서 data를 받아옴
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
