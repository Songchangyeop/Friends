import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
	currentPage: string;
}

function Nav({ currentPage }: Props) {
	return (
		<Navi>
			<Link to="/">
				<Img src="img/Logo.png" alt="Logo" />
			</Link>

			<NavList>
				{currentPage !== 'find' && (
					<Link
						to="/find"
						style={{
							textDecoration: `none`,
							color: 'white',
						}}
					>
						<List>동물 찾기</List>
					</Link>
				)}
				{currentPage !== 'bookmark' && (
					<Link
						to="/bookmark"
						style={{ textDecoration: `none`, color: 'white' }}
					>
						<List>찜</List>
					</Link>
				)}
			</NavList>
		</Navi>
	);
}

export default Nav;

const Navi = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	padding: 0 1em 0 1em;
	width: 100%;
	height: 10vh;
	background-color: #12b886;
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.3em;

	cursor: pointer;
	list-style: none;
`;

const List = styled.li`
	padding: 0.5em;
	transition: all 150ms ease;

	&:hover {
		color: #757575;
	}
`;

const Img = styled.img`
	width: 10em;
	cursor: pointer;
`;
