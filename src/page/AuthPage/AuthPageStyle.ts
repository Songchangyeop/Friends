import styled from 'styled-components';

export const Main = styled.main`
	width: 100%;
	height: 90vh;
`;

export const Section = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Wrap = styled.div`
	width: 70%;
	height: 70%;
	padding: 1em;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
`;

export const Login = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #12b886;
	border-radius: 1em;
	padding: 1em;
	transition: all 200ms ease;
	font-weight: bold;
	font-size: 1em;
	border: 2px solid #12b886;
	cursor: pointer;

	&:hover {
		background-color: #12b886;
		color: white;
	}
`;

export const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Img = styled.img`
	width: 12em;
	height: 12em;
`;

export const Span = styled.span`
	font-size: 1em;
`;
