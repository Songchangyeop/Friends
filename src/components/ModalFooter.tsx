import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import theme from '../assets/styles/theme';
import { ReducerType } from '../modules/rootReducer';
import { selectAction } from '../modules/selectAnimal/select';

interface SelectedAnimal {
	selected: {
		age: number;
		careAddr: string;
		careNm: string;
		careTel: string;
		chargeNm: string;
		colorCd: string;
		desertionNo: number;
		filename: string;
		happenDt: number;
		happenPlace: string;
		kindCd: string;
		neuterYn: string;
		noticeEdt: number;
		noticeNo: string;
		noticeSdt: number;
		officetel: string;
		orgNm: string;
		popfile: string;
		processState: string;
		sexCd: string;
		specialMark: string;
		weight: string;
	};
}

interface Page {
	currentPage: string;
}

function ModalFooter() {
	const { selected } = useSelector<ReducerType, SelectedAnimal>(
		(state) => state.selectReducer
	);

	const { currentPage } = useSelector<ReducerType, Page>(
		(state) => state.pageReducer
	);

	const { AddBookmark, RemoveBookmark } = selectAction;
	const dispatch = useDispatch();

	const handleAddBookmark = () => {
		dispatch(AddBookmark(selected));
	};

	const handleRemoveBookmark = () => {
		dispatch(RemoveBookmark(selected.desertionNo));
	};

	return (
		<>
			{currentPage === 'bookmark' && (
				<BookMark currentPage={currentPage} onClick={handleRemoveBookmark}>
					<Text theme={theme}>친구 목록에서 제거</Text>
				</BookMark>
			)}
			{currentPage === 'find' && (
				<BookMark currentPage={currentPage} onClick={handleAddBookmark}>
					<Text theme={theme}>친구 목록에 담기</Text>
				</BookMark>
			)}
		</>
	);
}

export default ModalFooter;

const BookMark = styled.button<Page>`
	${(props) =>
		props.currentPage === 'bookmark' &&
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
		props.currentPage === 'find' &&
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
`;

const Text = styled.span`
	font-family: 'Cafe24Oneprettynight';
	font-size: 1em;

	@media ${(props) => props.theme.mobile} {
		font-size: 0.8em;
	}
`;
