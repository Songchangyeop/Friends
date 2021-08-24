import React from 'react';
import styled from 'styled-components';

function ModalFooter() {
	return <BookMark>친구 목록에 담기</BookMark>;
}

export default ModalFooter;

const BookMark = styled.button`
	margin-top: 1em;
	width: 8em;
	height: 2em;
	background-color: #e0e0e0;
	border-radius: 1em;
	border: 0;
`;
