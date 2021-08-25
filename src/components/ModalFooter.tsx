import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { bookmarkAction } from '../modules/bookmarkAnimal/bookmark';
import { ReducerType } from '../modules/rootReducer';

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

interface PageOpen {
	isPageOpen: boolean;
}

function ModalFooter() {
	const { selected } = useSelector<ReducerType, SelectedAnimal>(
		(state) => state.selectReducer
	);
	const { isPageOpen } = useSelector<ReducerType, PageOpen>(
		(state) => state.bookmarkReducer
	);

	const { AddBookmark } = bookmarkAction;
	const dispatch = useDispatch();

	const handleAddBookmark = () => {
		dispatch(AddBookmark(selected));
	};

	return (
		<>
			{isPageOpen && (
				<BookMark onClick={handleAddBookmark}>친구 목록에서 제거</BookMark>
			)}
			{!isPageOpen && (
				<BookMark onClick={handleAddBookmark}>친구 목록에 담기</BookMark>
			)}
		</>
	);
}

export default ModalFooter;

const BookMark = styled.button`
	margin-top: 1em;
	width: 8em;
	height: 2em;
	background-color: #e0e0e0;
	border-radius: 1em;
	border: 0;
	cursor: pointer;
`;
