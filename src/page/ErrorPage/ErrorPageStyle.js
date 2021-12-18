import styled from 'styled-components';

export const Main = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;
	height: 100vh;
`;

export const Img = styled.img`
	width: 50%;
	height: 50%;
`;

export const Text = styled.p`
	font-size: 30px;
`;

export const Button = styled.button`
	width: auto;
	height: 2rem;
	border: 0;
	border-radius: 5px;
	background-color: #12b886;
	color: white;
	transition: all 200ms ease;
	cursor: pointer;

	&:hover {
		box-shadow: 6px 6px 8px 0px rgba(217, 217, 217, 1);
	}
`;
