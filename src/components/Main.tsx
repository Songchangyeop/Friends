import React from 'react';
import styled from 'styled-components';
import FinderContainer from '../containers/FinderContainer';
import ListContainer from '../containers/ListContainer';

const Section = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
`;

function Main() {
	return (
		<Section>
			<FinderContainer />
			<ListContainer />
		</Section>
	);
}

export default Main;
