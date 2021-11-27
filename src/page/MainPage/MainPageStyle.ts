import styled from 'styled-components';

export const Main = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const MainWrap = styled.div`
	display: flex;
	width: 75%;

	@media ${(props) => props.theme.mobile} {
		flex-direction: column-reverse;
		justify-content: center;
	}
`;

export const MainSection = styled.section`
	width: 100%;
	height: 80vh;
	background-color: ${(props) => props.theme.backgroundColor};
	color: white;
	display: flex;
	justify-content: center;
`;

export const LeftWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${(props) => props.theme.mobile} {
		margin-top: 1em;
		margin-bottom: 1em;
	}
`;

export const Text = styled.div`
	width: 70%;
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;

	@media ${(props) => props.theme.mobile} {
		width: 100%;
	}
`;

export const RightWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${(props) => props.theme.mobile} {
		margin-top: 1em;
		margin-bottom: 1em;
	}
`;

export const MainImg = styled.img`
	width: 80%;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);

	@media ${(props) => props.theme.mobile} {
		width: 100%;
	}
`;

export const Bold = styled.span`
	font-size: 2em;
	font-weight: bold;

	@media ${(props) => props.theme.mobile} {
		font-size: 1.2em;
		margin-bottom: 1em;
	}
`;

export const Light = styled.span`
	font-size: 1em;
	font-weight: lighter;

	@media ${(props) => props.theme.mobile} {
		font-size: 0.9em;
	}
`;

export const ListSection = styled.section`
	width: 75%;
	height: 65vh;
	display: flex;

	@media ${(props) => props.theme.mobile} {
		flex-direction: column-reverse;
		justify-content: center;
		height: auto;
	}
`;

export const CitySection = styled.section`
	width: 75%;
	height: 65vh;
	display: flex;
	color: black;

	@media ${(props) => props.theme.mobile} {
		flex-direction: column;
		height: auto;
	}
`;

export const CityImg = styled.img`
	margin-top: 1em;
	width: 18.5rem;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);

	@media ${(props) => props.theme.mobile} {
		width: 80%;
	}
`;

export const ListImg = styled.img`
	width: 33rem;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);

	@media ${(props) => props.theme.mobile} {
		width: 100%;
	}
`;
