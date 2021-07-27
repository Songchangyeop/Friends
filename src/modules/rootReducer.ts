import { animalReducer } from './animal';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { animalSaga } from './saga';

// animalReducer 를 rootReducer 로 합쳐 내보냄
const rootReducer = combineReducers({
	animalReducer,
});

export function* rootSaga() {
	// all 은 여러 사가를 동시에 실행시켜준다. 현재는 animalSaga 하나.
	yield all([animalSaga()]);
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
