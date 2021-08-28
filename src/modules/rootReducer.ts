import { selectReducer } from './selectAnimal/select';
import { animalReducer } from './getData/animal';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { animalSaga } from './getData/saga';

// animalReducer 를 rootReducer 로 합쳐 내보냄
const rootReducer = combineReducers({
	animalReducer,
	selectReducer,
});

export function* rootSaga() {
	// all 은 여러 사가를 동시에 실행시켜준다. 현재는 animalSaga 하나.
	yield all([animalSaga()]);
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
