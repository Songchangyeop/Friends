import styled from 'styled-components';

export const Modal = styled.div`
	position: relative;
	background-color: white;
	width: 40%;
	height: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 1em;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);
`;

export const Span = styled.span`
	font-size: 1.4em;
`;

export const BtnWrap = styled.div`
	position: absolute;
	display: flex;
	bottom: 1em;
	align-items: center;
	justify-content: space-around;
	width: 50%;
	height: auto;
`;

export const Button = styled.button`
	font-size: 1em;
	width: auto;
	height: 2em;
	border: 0;
	border-radius: 0.5em;
	background-color: #e0e0e0;
	cursor: pointer;

	&:hover {
		background-color: #bdbdbd;
	}
`;

export const BtnText = styled.span`
	font-size: 0.8em;
`;
