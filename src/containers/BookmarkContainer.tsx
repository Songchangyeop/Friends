import React from 'react';
import Bookmark from '../components/Bookmark';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

function BookmarkContainer({ history }: RouteComponentProps) {
	return (
		<Section>
			<Img src="img/Logo.png" alt="Logo" onClick={() => history.push('/')} />
			<Bookmark />;
		</Section>
	);
}

export default BookmarkContainer;

const Section = styled.header`
	width: 100%;
	height: 100vh;
	background-color: #12b886;
`;

const Img = styled.img`
	margin: 1em;
	width: 10em;
	cursor: pointer;
`;
