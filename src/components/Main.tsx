import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import FinderContainer from '../containers/FinderContainer';
import ListContainer from '../containers/ListContainer';

const Section = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
`;

function Main() {
	const [isClickBtn, setClickBtn] = useState(false);

	const handleClickBtn = () => {
		setClickBtn(true);
	};

	return (
		<Section>
			<FinderContainer handleClickBtn={handleClickBtn} />
			{isClickBtn && <ListContainer />}
		</Section>
	);
}

export default Main;
