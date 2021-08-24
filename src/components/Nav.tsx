import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Nav() {
	const handleClickReload = () => {
		window.location.reload();
	};

	return (
		<Ul>
			<Img src="img/Logo.png" alt="Logo" onClick={handleClickReload} />
			<FriendsList>
				<Link to="/bookmark" style={{ textDecoration: `none`, color: 'white' }}>
					찜
				</Link>
			</FriendsList>
		</Ul>
	);
}

export default Nav;

const Ul = styled.ul`
	display: flex;
	justify-content: space-between;
	margin-bottom: 6em;
	margin-top: 0;
	padding: 1em 1em 0 1em;
	width: 100%;
	list-style: none;
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
