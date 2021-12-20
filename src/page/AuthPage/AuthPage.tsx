import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import * as style from './AuthPageStyle';
import NavContainer from '../../containers/NavContainer';
import { pageAction } from '../../modules/CurrentPage/PageCheck';
import AuthService from '../../service/auth_service';

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
		authService.login();
	};

	useEffect(() => {
		authService.onAuthChange((user: { uid: any }) => {
			user && goToMain(user.uid);
		});
	});

	return (
		<style.Main>
			<NavContainer />
			<style.Section>
				<style.Wrap>
					<style.Login onClick={onLogin}>
						<style.Img src="img/google.webp" alt="google"></style.Img>
						<span>Google을(를) 사용하여 로그인</span>
					</style.Login>
					<style.Text>
						<style.Span>
							이 프로젝트는 포트폴리오를 위한 프로젝트이며 로그인을 완료한
							사용자에 한하여 동물 정보를 조회할 수 있습니다.
						</style.Span>
						<style.Span>
							구글 로그인만을 필요로 하며, 서비스 종료와 함께 로그인 데이터는
							일괄 삭제됩니다.
						</style.Span>
					</style.Text>
				</style.Wrap>
			</style.Section>
		</style.Main>
	);
}

export default AuthPage;
