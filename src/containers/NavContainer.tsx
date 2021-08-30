import React from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { ReducerType } from '../modules/rootReducer';

interface PageOpen {
	currentPage: string;
}

function NavContainer() {
	const { currentPage } = useSelector<ReducerType, PageOpen>(
		(state) => state.pageReducer
	);
	return <Nav currentPage={currentPage} />;
}

export default NavContainer;
