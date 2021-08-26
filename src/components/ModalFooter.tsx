import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { bookmarkAction } from '../modules/bookmarkAnimal/bookmark';
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
	isPageOpen: boolean;
}

interface isbookMarkOpen {
	isPageOpen: boolean;
}

function ModalFooter() {
	const { selected, isPageOpen } = useSelector<ReducerType, SelectedAnimal>(
		(state) => state.selectReducer
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
			{isPageOpen && (
				<BookMark isPageOpen={isPageOpen} onClick={handleRemoveBookmark}>
					친구 목록에서 제거
				</BookMark>
			)}
			{!isPageOpen && (
				<BookMark isPageOpen={isPageOpen} onClick={handleAddBookmark}>
					친구 목록에 담기
				</BookMark>
			)}
		</>
	);
}

export default ModalFooter;

const BookMark = styled.button<isbookMarkOpen>`
	${(props) =>
		props.isPageOpen &&
		css`
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
		!props.isPageOpen &&
		css`
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
