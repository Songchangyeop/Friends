import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookmarkPage from './page/BookmarkPage';
import MainPage from './page/MainPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MainPage}></Route>
					<Route path="/bookmark" component={BookmarkPage}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
