import styled from 'styled-components';

export const Div = styled.div`
	width: 90%;
	background-color: #fafafa;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1em;
`;

export const Main = styled.main`
	width: 100%;
	height: 90%;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

export const Section = styled.section`
	background-color: #fafafa;
	width: 90%;
	height: 100%;
	padding: 2em;
	display: flex;
	margin-top: 1em;
	margin-bottom: 1em;

	@media ${(props) => props.theme.mobile} {
		flex-direction: column;
	}
`;

export const Img = styled.img`
	width: 30%;
	height: 400px;
	border-radius: 0.5em;
	margin-top: 2em;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);

	@media ${(props) => props.theme.mobile} {
		width: 80%;
		height: 250px;
	}
`;

export const Table = styled.table`
	width: 95%;
	margin-top: 1em;
	border-top: 2px solid black;
	/* border-spacing: 0; */
`;

export const Th = styled.th`
	width: 20%;
	border-bottom: 1px solid #efefef;
`;

export const Td = styled.td`
	padding: 0.9em;
	border-bottom: 1px solid #efefef;
	text-align: right;
`;

export const LeftDetail = styled.div`
	width: 50%;

	@media ${(props) => props.theme.mobile} {
		width: 100%;
	}
`;

export const RightDetail = styled.div`
	width: 50%;

	@media ${(props) => props.theme.mobile} {
		width: 100%;
	}
`;

export const DetailHeader = styled.span`
	font-size: 2em;
	font-weight: bold;
	color: ${(props) => props.theme.backgroundColor};
`;
