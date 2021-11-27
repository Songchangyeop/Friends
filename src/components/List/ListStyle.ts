import styled, { keyframes } from 'styled-components';

// 디자인
export const Up = keyframes`
  0% {
    transform: translateY(30%);
		opacity: 0;
  }

  100% {
    transform: translateY(0%);
		opacity: 1;
  }
`;

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
	height: 200px;
	margin: 1em;
	border: 1px solid #e8e7e6;
	border-radius: 0.5em;
	font-size: 0.7em;
	overflow-x: visible;
	cursor: pointer;
	transition: all 150ms ease;
	animation: ${Up} 1s ease;
	background-color: white;
	box-shadow: 6px 6px 8px 0px rgba(217, 217, 217, 1);

	&:hover {
		transform: scale(1.04);
		box-shadow: 10px 10px 12px 0px rgba(217, 217, 217, 1);
	}

	@media ${(props) => props.theme.mobile} {
		width: 100px;
		height: 150px;
	}
`;

export const Img = styled.img`
	width: 100%;
	height: 150px;
	border-top-left-radius: 0.5em;
	border-top-right-radius: 0.5em;

	@media ${(props) => props.theme.mobile} {
		width: 100%;
		height: 100px;
	}
`;

export const Wrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 0.4rem;

	@media ${(props) => props.theme.mobile} {
		padding: 0.2rem;
	}
`;

export const Text = styled.span`
	font-size: 11px;
	font-family: 'Cafe24Oneprettynight';

	@media ${(props) => props.theme.mobile} {
		font-size: 6.5px;
	}
`;
