import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookmarkPage from './page/BookmarkPage';
import MainPage from './page/MainPage';
import Test from './page/Test';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MainPage}></Route>
					<Route path="/bookmark" component={BookmarkPage}></Route>
					<Route path="/test" component={Test}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
