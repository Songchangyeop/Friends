import styled from 'styled-components';

export const Foot = styled.footer`
	width: 100%;
	height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media ${(props) => props.theme.mobile} {
		background-color: ${(props) => props.theme.backgroundColor};
	}
`;
