import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Bookmark from './page/Bookmark';
import Main from './page/Main';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main}></Route>
					<Route path="/bookmark" component={Bookmark}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
