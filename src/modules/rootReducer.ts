import { pageReducer } from './CurrentPage/PageCheck';
import { selectReducer } from './selectAnimal/select';
import { animalReducer } from './getData/animal';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { animalSaga } from './getData/AnimalSaga';

const rootReducer = combineReducers({
	animalReducer,
	selectReducer,
	pageReducer,
});

export function* rootSaga() {
	yield all([animalSaga()]);
}

export type ReducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
