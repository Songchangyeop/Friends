import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookmarkPage from './page/BookmarkPage';
import DetailPage from './page/DetailPage';
import FindPage from './page/FindPage';
import MainPage from './page/MainPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MainPage}></Route>
					<Route path="/find" component={FindPage}></Route>
					<Route path="/bookmark" component={BookmarkPage}></Route>
					<Route path="/detail" component={DetailPage}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
