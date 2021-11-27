import styled, { keyframes } from 'styled-components';

export const Opacity = keyframes`
	0%{
		opacity: 0;
	}

	50%{
		opacity: 1;
	}
`;

export const Span = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	width: auto;
	padding: 0.5em;
	height: 2.5em;
	border-radius: 1em;
	background-color: #424242;
	color: white;
	top: 5em;
	animation: ${Opacity} 300ms ease;
	font-family: 'Cafe24Oneprettynight';
	font-size: 1.5em;
`;
