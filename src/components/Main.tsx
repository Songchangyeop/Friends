import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
	font-size: 1.5em;
	cursor: pointer;
`;

function Main() {
	return (
		<Header>
			<span>Friends</span>
		</Header>
	);
}

export default Main;
