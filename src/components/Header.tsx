import React from 'react';
import styled from 'styled-components';

function Header() {
	return <HeaderTag>친구가 되어주세요</HeaderTag>;
}

export default Header;

const HeaderTag = styled.header`
	font-size: 1.5em;
	font-family: 'Cafe24Oneprettynight';
	padding-bottom: 0.3em;
`;
