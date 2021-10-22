import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import theme from '../assets/styles/theme';
import { ReducerType } from '../modules/rootReducer';
import { selectAction } from '../modules/selectAnimal/select';
import AuthService from '../service/auth_service';

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

interface BookmarkAnimalType {
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
}

interface isBookmark {
	isBookmark: boolean;
	currentPage: string;
}

interface Page {
	currentPage: string;
}

interface Bookmark {
	bookmark: BookmarkAnimalType[];
}

function ModalFooter() {
	const [isBookmark, setIsBookmark] = useState(false);
	const authService = new AuthService();
	const [userId, setUserId] = useState('');
	const { selected } = useSelector<ReducerType, SelectedAnimal>(
		(state) => state.selectReducer
	);

	const { currentPage } = useSelector<ReducerType, Page>(
		(state) => state.pageReducer
	);

	const { bookmark } = useSelector<ReducerType, Bookmark>(
		(state) => state.selectReducer
	);

	const { AddBookmark, RemoveBookmark } = selectAction;
	const dispatch = useDispatch();

	const handleAddBookmark = () => {
		console.log(selected);
		const payload = {
			bookmark: selected,
			userId: userId,
		};
		dispatch(AddBookmark(payload));
	};

	const handleRemoveBookmark = () => {
		const payload = {
			userId: userId,
			bookmarkId: selected.desertionNo,
		};
		dispatch(RemoveBookmark(payload));
	};

	useEffect(() => {
		if (
			bookmark.findIndex((item) => item.desertionNo === selected.desertionNo) >=
			0
		) {
			setIsBookmark(true);
		} else {
			setIsBookmark(false);
		}
	}, [bookmark, selected.desertionNo]);

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setUserId(user.uid);
			}
		});
	});

	return (
		<>
			{isBookmark === true && (
				<BookMark
					isBookmark={isBookmark}
					currentPage={currentPage}
					onClick={handleRemoveBookmark}
				>
					<Text theme={theme}>친구 목록에서 제거</Text>
				</BookMark>
			)}
			{isBookmark === false && currentPage !== 'detail' && (
				<BookMark
					isBookmark={isBookmark}
					currentPage={currentPage}
					onClick={handleAddBookmark}
				>
					<Text theme={theme}>친구 목록에 담기</Text>
				</BookMark>
			)}
			{isBookmark === false && currentPage === 'detail' && (
				<BookMark
					isBookmark={isBookmark}
					currentPage={currentPage}
					onClick={handleAddBookmark}
				>
					<Text theme={theme}>친구 목록에 담기</Text>
				</BookMark>
			)}
		</>
	);
}

export default ModalFooter;

const BookMark = styled.button<isBookmark>`
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

const Text = styled.span`
	font-family: 'Cafe24Oneprettynight';
	font-size: 1em;

	@media ${(props) => props.theme.mobile} {
		font-size: 0.8em;
	}
`;
