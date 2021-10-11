import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import NavContainer from '../containers/NavContainer';
import { pageAction } from '../modules/CurrentPage/PageCheck';
import AuthService from '../service/auth_service';

interface Props extends RouteComponentProps {}

function AuthPage({ history }: Props) {
	const { ChangePage } = pageAction;
	const dispatch = useDispatch();

	const authService = new AuthService();

	useEffect(() => {
		dispatch(ChangePage('auth'));
	}, []);

	const goToMain = (userId: any) => {
		history.push({
			pathname: '/',
			state: { id: userId },
		});
	};

	const onLogin = () => {
		authService //
			.login();
		//
	};

	useEffect(() => {
		authService.onAuthChange((user: { id: any }) => {
			user && goToMain(user.id);
		});
	});

	return (
		<Main>
			<NavContainer />
			<Section>
				<Wrap>
					<Login onClick={onLogin}>
						<Img src="img/google.png" alt="google"></Img>
						<span>Google을(를) 사용하여 로그인</span>
					</Login>
					<Text>
						<Span>
							이 프로젝트는 포트폴리오를 위한 프로젝트이며 로그인을 완료한
							사용자에 한하여 동물 정보를 조회할 수 있습니다.
						</Span>
						<Span>
							구글 로그인만을 필요로 하며, 서비스 종료와 함께 로그인 데이터는
							일괄 삭제됩니다.
						</Span>
					</Text>
				</Wrap>
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

const Wrap = styled.div`
	width: 70%;
	height: 70%;
	padding: 1em;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
`;

const Login = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #12b886;
	border-radius: 1em;
	padding: 1em;
	transition: all 200ms ease;
	font-weight: bold;
	font-size: 1em;
	border: 2px solid #12b886;
	cursor: pointer;

	&:hover {
		background-color: #12b886;
		color: white;
	}
`;

const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Img = styled.img`
	width: 12em;
	height: 12em;
`;

const Span = styled.span`
	font-size: 1em;
`;
