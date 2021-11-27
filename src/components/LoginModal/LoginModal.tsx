import React from 'react';
import { Link } from 'react-router-dom';
import * as style from './LoginModalStyle';

function LoginModal() {
	return (
		<style.Modal>
			<style.Span>로그인을 하시면 서비스 이용이 가능합니다</style.Span>
			<style.BtnWrap>
				<Link
					to="/auth"
					style={{
						textDecoration: `none`,
					}}
				>
					<style.Button type="button">
						<style.BtnText>로그인하러 가기</style.BtnText>
					</style.Button>
				</Link>
				<Link
					to="/"
					style={{
						textDecoration: `none`,
					}}
				>
					<style.Button type="button">
						<style.BtnText>메인 페이지로 가기</style.BtnText>
					</style.Button>
				</Link>
			</style.BtnWrap>
		</style.Modal>
	);
}

export default LoginModal;
