import styled from 'styled-components';

export const Section = styled.section`
	width: 90%;
	background-color: #fafafa;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em;
`;

export const Title = styled.span`
	font-size: 1.5em;
	font-weight: bold;
	color: ${(props) => props.theme.backgroundColor};
`;

export const Map = styled.div`
	width: 500px;
	height: 400px;
	margin: 1em;

	@media ${(props) => props.theme.mobile} {
		width: 300px;
		height: 300px;
	}
`;
