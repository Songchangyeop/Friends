import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/styles/global-styles';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { rootSaga } from './modules/rootReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: rootReducer,
	middleware: [sagaMiddleware],
});

// saga를 실행
sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		<App />
	</Provider>,
	document.getElementById('root')
);
