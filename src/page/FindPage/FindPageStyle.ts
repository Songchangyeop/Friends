import styled from 'styled-components';

export const Main = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;

	@media ${(props) => props.theme.mobile} {
		flex-direction: column;
	}
`;

export const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;
