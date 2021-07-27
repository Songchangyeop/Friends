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
	const { isLoading } = useSelector<ReducerType, State>(
		(state) => state.animalReducer
	);

	return (
		<Section>
			<FinderContainer />
			<ListContainer isLoading={isLoading} />
		</Section>
	);
}

export default Main;
