import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './components/Main';
function App() {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
