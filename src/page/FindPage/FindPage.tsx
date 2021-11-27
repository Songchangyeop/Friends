import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as style from './FindPageStyle';
import theme from '../../assets/styles/theme';
import FinderContainer from '../../containers/FinderContainer';
import ListContainer from '../../containers/ListContainer';
import LoginModalContainer from '../../containers/LoginModalContainer';
import ModalContainer from '../../containers/ModalContainer';
import { pageAction } from '../../modules/CurrentPage/PageCheck';
import { ReducerType } from '../../modules/rootReducer';
import AuthService from '../../service/auth_service';

interface Select {
	isSelect: boolean;
}

function MainPage() {
	const [openModal, setOpenModal] = useState<boolean>();
	const { isSelect } = useSelector<ReducerType, Select>(
		(state) => state.selectReducer
	);
	const [isLogin, setIsLogin] = useState(true);
	const { ChangePage } = pageAction;
	const dispatch = useDispatch();
	const authService = new AuthService();

	useEffect(() => {
		setOpenModal(isSelect);
	}, [isSelect]);

	useEffect(() => {
		dispatch(ChangePage('find'));
	}, []);

	useEffect(() => {
		authService.onAuthChange((user) => {
			user ? setIsLogin(true) : setIsLogin(false);
		});
	});

	return (
		<style.Main theme={theme}>
			{isLogin === false && <LoginModalContainer />}
			<FinderContainer />
			<ListContainer />
			{openModal && (
				<style.Container>
					<ModalContainer />
				</style.Container>
			)}
		</style.Main>
	);
}

export default MainPage;
