import { AnimalType, ParamType } from './../../types/type';
import { animalAction } from './animal';
import { call, put, takeEvery } from '@redux-saga/core/effects';
import * as API from '../../service/get-data';

export function* getDataSaga(action: { payload: ParamType }) {
	const { getDataSuccess, getDataFailure } = animalAction;
	const param = action.payload;
	try {
		const response: AnimalType = yield call(API.getAnimal, param);
		yield put(getDataSuccess(response));
	} catch (error) {
		yield put(getDataFailure(error));
	}
}

export function* animalSaga() {
	const { getData } = animalAction;
	yield takeEvery(getData, getDataSaga);
}
