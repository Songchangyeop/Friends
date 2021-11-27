import styled, { keyframes } from 'styled-components';

export const Scale = keyframes`
  0% {
    transform: scale(0);
  }

	80%{
		transform: scale(1.03);

	}

  100% {
		transform: scale(1.0);
  }
`;

export const Div = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0.5em 1em 1em 1em;
	background-color: white;
	border-radius: 1em;
	width: 40%;
	height: 70%;
	animation: ${Scale} 300ms ease;
	z-index: 5;
	box-shadow: rgb(0 0 0 / 25%) 10px 10px 20px;
	&::-webkit-scrollbar {
		width: 7px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #9e9e9e;
	}

	&::-webkit-scrollbar-track {
		background-color: #e0e0e0;
	}

	@media ${(props) => props.theme.mobile} {
		width: 85%;
		height: 60%;
	}
`;

export const Img = styled.img`
	width: 60%;
	height: 50%;
	border-radius: 0.5em;

	@media ${(props) => props.theme.mobile} {
		width: 80%;
		height: 40%;
	}
`;

export const Span = styled.span`
	font-family: 'Cafe24Oneprettynight';
	margin-top: 0.7em;
`;

export const Left = styled.div`
	width: 40%;
	height: auto;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const Right = styled.div`
	width: 40%;
	height: auto;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

export const Wrap = styled.div`
	width: 100%;
	height: auto;
	justify-content: center;
	display: flex;
	overflow-y: auto;
	margin-top: 1em;
	font-size: 0.9em;

	@media ${(props) => props.theme.mobile} {
		font-size: 0.7em;
	}
`;
