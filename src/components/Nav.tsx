import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../assets/styles/theme';

interface Props {
	currentPage: string;
	isLogin: boolean;
	onLogout: () => void;
}

function Nav({ currentPage, isLogin, onLogout }: Props) {
	return (
		<Navi theme={theme}>
			<Link
				to="/"
				style={{
					textDecoration: `none`,
					color: 'white',
				}}
			>
				<Img src="img/Logo.png" alt="Logo" theme={theme} />
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
						<List theme={theme}>동물 찾기</List>
					</Link>
				)}
				{currentPage !== 'bookmark' && (
					<Link
						to="/bookmark"
						style={{ textDecoration: `none`, color: 'white' }}
					>
						<List theme={theme}>찜</List>
					</Link>
				)}
				{currentPage !== 'auth' && isLogin === false && (
					<Link
						to="/auth"
						style={{
							textDecoration: `none`,
							color: 'white',
						}}
					>
						<List theme={theme}>로그인</List>
					</Link>
				)}
				{isLogin === true && (
					<Link
						to="/"
						style={{
							textDecoration: `none`,
							color: 'white',
						}}
					>
						<List onClick={onLogout} theme={theme}>
							로그아웃
						</List>
					</Link>
				)}
			</NavList>
		</Navi>
	);
}

export default Nav;

const Navi = styled.nav`
	position: sticky;
	top: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0;
	padding: 0 1em 0 1em;
	width: 100%;
	height: 10vh;
	background-color: ${(props) => props.theme.backgroundColor};
	z-index: 5;
`;

const NavList = styled.ul`
	display: flex;
	align-items: center;
	font-weight: bold;

	cursor: pointer;
	list-style: none;
`;

const List = styled.li`
	padding: 0.5em;
	transition: all 150ms ease;
	color: white;
	font-size: 1.3em;

	&:hover {
		color: black;
	}

	@media ${(props) => props.theme.mobile} {
		font-size: 1em;
	}
`;

const Img = styled.img`
	width: 5em;
	cursor: pointer;

	@media ${(props) => props.theme.mobile} {
		width: 4em;
	}
`;
