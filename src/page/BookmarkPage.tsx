import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import List from '../components/List';
import ModalContainer from '../containers/ModalContainer';
import NavContainer from '../containers/NavContainer';
import { pageAction } from '../modules/CurrentPage/PageCheck';
import { ReducerType } from '../modules/rootReducer';

interface AnimalType {
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

interface Select {
	bookmark: AnimalType[];
	isSelect: boolean;
}

function BookmarkPage() {
	const { ChagnePage } = pageAction;
	const dispatch = useDispatch();

	const { isSelect, bookmark } = useSelector<ReducerType, Select>(
		(state) => state.selectReducer
	);

	useEffect(() => {
		dispatch(ChagnePage('bookmark'));
	}, []);

	return (
		<Main>
			{isSelect && (
				<Container>
					<ModalContainer />
				</Container>
			)}
			<NavContainer />
			<Ul>
				{bookmark &&
					bookmark.map((item) => <List key={item.desertionNo} item={item} />)}
				{bookmark.length < 1 && <div>리스트가 비어 있습니다</div>}
			</Ul>
		</Main>
	);
}

export default BookmarkPage;

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;

const Main = styled.main`
	width: 100%;
	height: 10vh;
`;

const Ul = styled.ul`
	width: 100%;
	height: 90vh;
	display: flex;
	list-style: none;
	margin: 0;
`;
