import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import BookmarkContainer from './containers/BookmarkContainer';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main}></Route>
					<Route path="/bookmark" component={BookmarkContainer}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
