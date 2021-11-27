import styled, { css } from 'styled-components';

interface isBookmark {
	isBookmark: boolean;
	currentPage: string;
}

export const BookMark = styled.button<isBookmark>`
	${(props) =>
		props.isBookmark === true &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1em;
			width: 9em;
			height: 2em;
			background-color: #e0e0e0;
			border-radius: 1em;
			border: 0;
			cursor: pointer;

			&:hover {
				background-color: #bdbdbd;
			}
		`}

	${(props) =>
		props.isBookmark === false &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 1em;
			width: 8em;
			height: 2em;
			background-color: #e0e0e0;
			border-radius: 1em;
			border: 0;
			cursor: pointer;

			&:hover {
				background-color: #bdbdbd;
			}
		`}

		${(props) =>
		props.currentPage === 'detail' &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
			width: 10em;
			font-size: 1.5em;
			padding: 0.3em;
			background-color: #e0e0e0;
			border-radius: 1em;
			border: 0;
			cursor: pointer;

			&:hover {
				background-color: #bdbdbd;
			}
		`}
`;

export const Text = styled.span`
	font-family: 'Cafe24Oneprettynight';
	font-size: 1em;

	@media ${(props) => props.theme.mobile} {
		font-size: 0.8em;
	}
`;
