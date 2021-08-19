import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FinderContainer from '../containers/FinderContainer';
import ListContainer from '../containers/ListContainer';
import { ReducerType } from '../modules/rootReducer';

const Section = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
`;

interface State {
	isLoading: boolean;
}

function Main() {
	return (
		<Section>
			<FinderContainer />
			<ListContainer />
		</Section>
	);
}

export default Main;
