import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../assets/styles/theme';
import FinderContainer from '../containers/FinderContainer';
import ListContainer from '../containers/ListContainer';
import LoginModalContainer from '../containers/LoginModalContainer';
import ModalContainer from '../containers/ModalContainer';
import { pageAction } from '../modules/CurrentPage/PageCheck';
import { ReducerType } from '../modules/rootReducer';
import AuthService from '../service/auth_service';

interface Select {
	isSelect: boolean;
}

function MainPage() {
	const { isSelect } = useSelector<ReducerType, Select>(
		(state) => state.selectReducer
	);
	const [isLogin, setIsLogin] = useState(true);
	const { ChangePage } = pageAction;
	const dispatch = useDispatch();
	const authService = new AuthService();

	useEffect(() => {
		dispatch(ChangePage('find'));
	}, []);

	useEffect(() => {
		authService.onAuthChange((user) => {
			user ? setIsLogin(true) : setIsLogin(false);
		});
	});

	return (
		<Main theme={theme}>
			{isLogin === false && <LoginModalContainer />}
			<FinderContainer />
			<ListContainer />
			{isSelect && (
				<Container>
					<ModalContainer />
				</Container>
			)}
		</Main>
	);
}

export default MainPage;

const Main = styled.main`
	width: 100%;
	height: 100vh;
	display: flex;
	overflow: hidden;

	@media ${(props) => props.theme.mobile} {
		flex-direction: column;
	}
`;

const Container = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
`;
