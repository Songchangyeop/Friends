import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import List from '../components/List';
import ModalContainer from '../containers/ModalContainer';
import NavContainer from '../containers/NavContainer';
import { pageAction } from '../modules/CurrentPage/PageCheck';
import { ReducerType } from '../modules/rootReducer';
import theme from '../assets/styles/theme';
import AuthService from '../service/auth_service';
import LoginModalContainer from '../containers/LoginModalContainer';
import { selectAction } from '../modules/selectAnimal/select';

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
	const [isLogin, setIsLogin] = useState(true);
	const [userId, setUserId] = useState('');
	const { ChangePage } = pageAction;
	const { GetBookmark } = selectAction;
	const dispatch = useDispatch();
	const authService = new AuthService();
	const { isSelect, bookmark } = useSelector<ReducerType, Select>(
		(state) => state.selectReducer
	);

	useEffect(() => {
		dispatch(ChangePage('bookmark'));
		userId && dispatch(GetBookmark(userId));
	}, [ChangePage, GetBookmark, dispatch, userId]);

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setIsLogin(true);
				setUserId(user.uid);
			} else {
				setIsLogin(false);
			}
		});
	});

	return (
		<Main>
			{isLogin === false && <LoginModalContainer />}
			{isSelect && (
				<Container>
					<ModalContainer />
				</Container>
			)}
			<NavContainer />
			<Ul>
				{bookmark &&
					bookmark.map((item) => <List key={item.desertionNo} item={item} />)}
				{bookmark.length < 1 && (
					<Div>
						<Image src="img/blank.png" alt="blank" theme={theme} />
						<Text theme={theme}>리스트가 비어있습니다</Text>
					</Div>
				)}
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
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	margin: 0;
	padding: 0;
`;

const Div = styled.div`
	width: 100%;
	height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Image = styled.img`
	width: auto;

	@media ${(props) => props.theme.mobile} {
		width: 15em;
	}
`;

const Text = styled.text`
	color: #a6a6a6;
	font-family: 'Cafe24Oneprettynight';
	font-weight: bold;
	font-size: 2em;
	cursor: default;

	@media ${(props) => props.theme.mobile} {
		font-size: 1.5em;
	}
`;
