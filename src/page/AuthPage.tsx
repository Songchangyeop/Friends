import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavContainer from '../containers/NavContainer';
import { pageAction } from '../modules/CurrentPage/PageCheck';

function AuthPage() {
	const { ChangePage } = pageAction;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ChangePage('auth'));
	}, []);

	return (
		<Main>
			<NavContainer />
			<Section>
				<Login></Login>
			</Section>
		</Main>
	);
}

export default AuthPage;

const Main = styled.main`
	width: 100%;
	height: 90vh;
`;

const Section = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Login = styled.div`
	width: 70%;
	height: 70%;
	border: 1px solid black;
`;
