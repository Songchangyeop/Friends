import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './assets/styles/global-styles';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer, { rootSaga } from './modules/rootReducer';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { PersistGate } from 'redux-persist/integration/react';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
	reducer: rootReducer,
	middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<GlobalStyle />
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);
