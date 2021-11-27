import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as style from './ModalFooterStyle';
import theme from '../../../assets/styles/theme';
import { ReducerType } from '../../../modules/rootReducer';
import { selectAction } from '../../../modules/selectAnimal/select';
import AuthService from '../../../service/auth_service';

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
	}, []);

	return (
		<>
			{isBookmark === true && (
				<style.BookMark
					isBookmark={isBookmark}
					currentPage={currentPage}
					onClick={handleRemoveBookmark}
				>
					<style.Text theme={theme}>친구 목록에서 제거</style.Text>
				</style.BookMark>
			)}
			{isBookmark === false && currentPage !== 'detail' && (
				<style.BookMark
					isBookmark={isBookmark}
					currentPage={currentPage}
					onClick={handleAddBookmark}
				>
					<style.Text theme={theme}>친구 목록에 담기</style.Text>
				</style.BookMark>
			)}

			{isBookmark === false && currentPage === 'detail' && (
				<style.BookMark
					isBookmark={isBookmark}
					currentPage={currentPage}
					onClick={handleAddBookmark}
				>
					<style.Text theme={theme}>친구 목록에 담기</style.Text>
				</style.BookMark>
			)}
		</>
	);
}

export default ModalFooter;
