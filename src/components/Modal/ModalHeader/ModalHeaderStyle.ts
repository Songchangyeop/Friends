import styled from 'styled-components';

export const HeaderTag = styled.header`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.3em;
`;

export const H1 = styled.h1`
	font-size: 1.5em;
	font-family: 'Cafe24Oneprettynight';

	@media ${(props) => props.theme.mobile} {
		font-size: 1.2em;
	}
`;

export const Close = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 4em;
	height: 2em;
	right: 1em;
	border: 0;
	background-color: #e0e0e0;
	border-radius: 1em;
	cursor: pointer;

	&:hover {
		background-color: #bdbdbd;
	}

	@media ${(props) => props.theme.mobile} {
		width: 3.2em;
		height: 1.6em;
	}
`;

export const Detail = styled.span`
	font-size: 1.3em;
	border: 0;
	cursor: pointer;
	color: ${(props) => props.theme.backgroundColor};
	font-weight: bold;

	@media ${(props) => props.theme.mobile} {
		font-size: 0.9em;
	}
`;

export const Span = styled.span`
	font-size: 1.2em;
	font-family: 'Cafe24Oneprettynight';

	@media ${(props) => props.theme.mobile} {
		font-size: 1em;
	}
`;
