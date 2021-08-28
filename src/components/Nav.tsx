import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
	isPageOpen: boolean;
}

function Nav({ isPageOpen }: Props) {
	return (
		<Ul>
			<Link to="/">
				<Img src="img/Logo.png" alt="Logo" />
			</Link>
			<FriendsList>
				{!isPageOpen && (
					<Link
						to="/bookmark"
						style={{ textDecoration: `none`, color: 'white' }}
					>
						찜
					</Link>
				)}
			</FriendsList>
		</Ul>
	);
}

export default Nav;

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	padding: 0 1em 0 1em;
	width: 100%;
	height: 10vh;
	list-style: none;
	background-color: #12b886;
`;

const FriendsList = styled.li`
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.3em;
	transition: all 200ms ease;
	cursor: pointer;

	&:hover {
		transform: scale(1.06);
	}
`;

const Img = styled.img`
	width: 10em;
	cursor: pointer;
`;
