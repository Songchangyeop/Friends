import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { ReducerType } from '../modules/rootReducer';

interface PageOpen {
	isPageOpen: boolean;
}

function NavContainer() {
	const { isPageOpen } = useSelector<ReducerType, PageOpen>(
		(state) => state.selectReducer
	);
	return <Nav isPageOpen={isPageOpen} />;
}

export default NavContainer;
