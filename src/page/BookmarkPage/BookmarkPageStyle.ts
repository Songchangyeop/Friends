import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;

export const Main = styled.main`
	width: 100%;
	height: 10vh;
`;

export const Ul = styled.ul`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	padding: 0;
`;

export const Div = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	width: auto;

	@media ${(props) => props.theme.mobile} {
		width: 15em;
	}
`;

export const Text = styled.text`
	color: #a6a6a6;
	font-family: 'Cafe24Oneprettynight';
	font-weight: bold;
	font-size: 2em;
	cursor: default;

	@media ${(props) => props.theme.mobile} {
		font-size: 1.5em;
	}
`;
