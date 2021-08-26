import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import FinderContainer from '../containers/FinderContainer';
import ListContainer from '../containers/ListContainer';
import ModalContainer from '../containers/ModalContainer';
import { ReducerType } from '../modules/rootReducer';
import { selectAction } from '../modules/selectAnimal/select';

interface Select {
	isSelect: boolean;
}

function MainPage() {
	const { isSelect } = useSelector<ReducerType, Select>(
		(state) => state.selectReducer
	);
	const { PageOpen } = selectAction;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(PageOpen(false));
	}, []);

	return (
		<Section>
			<FinderContainer />
			<ListContainer />
			{isSelect && (
				<Container>
					<ModalContainer />
				</Container>
			)}
		</Section>
	);
}

export default MainPage;

const Section = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;
`;

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;
