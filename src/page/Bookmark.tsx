import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { bookmarkAction } from '../modules/bookmarkAnimal/bookmark';

function Bookmark() {
	const { PageOpen } = bookmarkAction;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(PageOpen(true));
	}, []);

	return (
		<Section>
			<Header>
				<Link to="/">
					<Img src="img/Logo.png" alt="Logo" />
				</Link>
			</Header>
		</Section>
	);
}

export default Bookmark;

const Section = styled.section`
	width: 100%;
	height: 100vh;
	background-color: #12b886;
`;

const Img = styled.img`
	width: 10em;
	cursor: pointer;
`;

const Header = styled.header`
	width: 100%;
	padding: 1em;
	background-color: #12b886;
`;
