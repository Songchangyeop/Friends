import React from 'react';
import styled from 'styled-components';
import theme from '../assets/styles/theme';

function Footer() {
	return <Foot theme={theme}>© 2021 Friends - by Changyeop Song</Foot>;
}

export default Footer;

const Foot = styled.footer`
	width: 100%;
	height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${(props) => props.theme.mobile} {
		background-color: ${(props) => props.theme.backgroundColor};
	}
`;
