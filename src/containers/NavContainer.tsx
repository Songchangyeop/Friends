import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Nav from '../components/Nav';
import { ReducerType } from '../modules/rootReducer';
import AuthService from '../service/auth_service';

interface PageOpen {
	currentPage: string;
}

function NavContainer() {
	const { currentPage } = useSelector<ReducerType, PageOpen>(
		(state) => state.pageReducer
	);
	const [isLogin, setIsLogin] = useState(false);
	const authService = new AuthService();

	const onLogout = () => {
		authService.logout();
	};

	useEffect(() => {
		authService.onAuthChange((user: { id: string }) => {
			user ? setIsLogin(true) : setIsLogin(false);
		});
	});

	return (
		<Nav currentPage={currentPage} isLogin={isLogin} onLogout={onLogout} />
	);
}

export default NavContainer;
