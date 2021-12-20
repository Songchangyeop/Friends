import styled from 'styled-components';

export const Shimmer = styled.div`
	width: 50%;
	height: 100%;
	background-color: #e0e0e0;
	box-shadow: 0 0 30px 30px #e0e0e0;
	animation: loading 2s infinite;
	@keyframes loading {
		0% {
			transform: translateX(-50%);
		}
		50% {
			transform: translateX(100%);
		}
		100% {
			transform: translate(200%);
		}
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
	background-color: white;
	box-shadow: 6px 6px 8px 0px rgba(217, 217, 217, 1);

	&:hover {
		transform: scale(1.04);
		box-shadow: 10px 10px 12px 0px rgba(217, 217, 217, 1);
	}

	@media ${(props) => props.theme.mobile} {
		width: 80px;
		height: 120px;
	}
`;

export const Img = styled.div`
	width: 100%;
	height: 150px;
	border-top-left-radius: 0.5em;
	border-top-right-radius: 0.5em;
	overflow: hidden;
	background-color: #eeeeee;

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

export const Text = styled.div`
	width: 100px;
	height: 10px;
	margin-bottom: 5px;
	overflow: hidden;
	background-color: #eeeeee;

	@media ${(props) => props.theme.mobile} {
		width: 50px;
		height: 7px;
	}
`;
