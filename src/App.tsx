import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import AuthPage from './page/AuthPage';
import BookmarkPage from './page/BookmarkPage';
import DetailPage from './page/DetailPage';
import FindPage from './page/FindPage';
import MainPage from './page/MainPage';

function App() {
	return (
		<Div>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={MainPage}></Route>
					<Route path="/find" component={FindPage}></Route>
					<Route path="/bookmark" component={BookmarkPage}></Route>
					<Route path="/detail" component={DetailPage}></Route>
					<Route path="/auth" component={AuthPage}></Route>
				</Switch>
			</BrowserRouter>
		</Div>
	);
}

export default App;

const Div = styled.div`
	font-family: 'Cafe24Oneprettynight';
`;
