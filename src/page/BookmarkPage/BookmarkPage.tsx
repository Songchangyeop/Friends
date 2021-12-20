import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as style from './BookmarkPageStyle';
import List from '../../components/List/List';
import ModalContainer from '../../containers/ModalContainer';
import NavContainer from '../../containers/NavContainer';
import { pageAction } from '../../modules/CurrentPage/PageCheck';
import { ReducerType } from '../../modules/rootReducer';
import theme from '../../assets/styles/theme';
import AuthService from '../../service/auth_service';
import LoginModalContainer from '../../containers/LoginModalContainer';
import { AnimalType } from '../../types/type';

interface Select {
	isSelect: boolean;
	bookmark: AnimalType[];
}

function BookmarkPage() {
	const [isLogin, setIsLogin] = useState(true);
	const { ChangePage } = pageAction;

	const dispatch = useDispatch();
	const authService = new AuthService();
	const { isSelect, bookmark } = useSelector<ReducerType, Select>(
		(state) => state.selectReducer
	);

	useEffect(() => {
		dispatch(ChangePage('bookmark'));
	}, [ChangePage, dispatch]);

	useEffect(() => {
		authService.onAuthChange((user) => {
			if (user) {
				setIsLogin(true);
			} else {
				setIsLogin(false);
			}
		});
	}, []);

	return (
		<style.Main>
			{isLogin === false && <LoginModalContainer />}
			{isSelect && (
				<style.Container>
					<ModalContainer />
				</style.Container>
			)}
			<NavContainer />
			<style.Ul>
				{bookmark &&
					bookmark.map((item) => <List key={item.desertionNo} item={item} />)}
				{bookmark.length < 1 && (
					<style.Div>
						<style.Image src="img/blank.webp" alt="blank" theme={theme} />
						<style.Text theme={theme}>리스트가 비어있습니다</style.Text>
					</style.Div>
				)}
			</style.Ul>
		</style.Main>
	);
}

export default BookmarkPage;
