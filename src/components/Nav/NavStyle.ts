import styled from 'styled-components';

export const Navi = styled.nav`
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

export const NavList = styled.ul`
	display: flex;
	align-items: center;
	font-weight: bold;
	font-size: 1.3em;

	cursor: pointer;
	list-style: none;
`;

export const List = styled.li`
	padding: 0.5em;
	transition: all 150ms ease;
	color: white;

	&:hover {
		color: black;
	}
`;

export const Img = styled.img`
	width: 5em;
	cursor: pointer;
`;
