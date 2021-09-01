import React from 'react';
import styled from 'styled-components';

function Footer() {
	return <Foot>© 2021 Friends - by changyeop Song</Foot>;
}

export default Footer;

const Foot = styled.footer`
	width: 100%;
	height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;
