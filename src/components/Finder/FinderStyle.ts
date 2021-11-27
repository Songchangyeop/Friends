import styled, { css } from 'styled-components';

interface ListOpen {
	listOpen: boolean;
}

interface Selected {
	selectedKind: string;
}

export const Section = styled.section<ListOpen>`
	flex: 1;
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.backgroundColor};
	color: white;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				height: 4em;
				flex: 1.1;
			}
		`}
`;

export const Article = styled.article<ListOpen>`
	width: 100%;
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				height: 4em;
			}
		`}
`;

export const Text = styled.div<ListOpen>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				display: none;
			}
		`}
`;

export const Form = styled.form<ListOpen>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				width: 90%;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
			}
		`}
`;

export const Bar = styled.div<ListOpen>`
	width: 2px;
	height: 5em;
	background-color: white;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				display: none;
			}
		`}
`;

export const Select = styled.select<ListOpen>`
	margin-top: 1.5em;
	margin-bottom: 1.5em;
	padding-left: 3.5em;
	width: 10em;
	font-size: 1.5em;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				width: 5em;
				padding-left: 1.3em;
				margin: 0;
			}
		`}
`;

export const Button = styled.button<ListOpen>`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 10rem;
	height: 3rem;
	margin-top: 1em;
	border: 0;
	border-radius: 1em;
	cursor: pointer;
	transition: all 150ms ease;
	background-color: white;
	color: black;

	&:hover {
		box-shadow: 0 0 19px rgb(0 0 0 / 25%);
	}

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				width: 3.8em;
				height: 2em;
				margin: 0;
			}
		`}
`;

export const CheckWrap = styled.div`
	width: 7rem;
	display: flex;
	justify-content: space-between;
`;

export const CheckDog = styled.p<Selected>`
	font-size: 2.5em;
	margin: 0;
	cursor: pointer;
	transition: all 200ms ease;

	&:hover {
		transform: scale(1.2);
	}

	transform: ${(props) =>
		props.selectedKind === '🐶' ? 'scale(1.2)' : 'scale(1.0)'};
`;

export const CheckCat = styled.p<Selected>`
	font-size: 2.5em;
	margin: 0;
	cursor: pointer;
	transition: all 200ms ease;

	&:hover {
		transform: scale(1.2);
	}

	transform: ${(props) =>
		props.selectedKind === '🐱' ? 'scale(1.2)' : 'scale(1.0)'};
`;

export const Warning = styled.span<ListOpen>`
	margin-top: 1em;
	margin-bottom: 0.5em;
	color: #d50000;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				display: none;
			}
		`}
`;
