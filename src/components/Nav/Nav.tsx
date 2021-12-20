import React from 'react';
import * as style from './NavStyle';
import { Link } from 'react-router-dom';
import theme from '../../assets/styles/theme';

interface Props {
	currentPage: string;
	isLogin: boolean;
	onLogout: () => void;
}

function Nav({ currentPage, isLogin, onLogout }: Props) {
	return (
		<style.Navi theme={theme}>
			<Link
				to="/"
				style={{
					textDecoration: `none`,
					color: 'white',
				}}
			>
				<style.Img src="/img/Logo.webp" alt="Logo" theme={theme} />
			</Link>

			<style.NavList theme={theme}>
				{currentPage !== 'find' && (
					<Link
						to="/find"
						style={{
							textDecoration: `none`,
							color: 'white',
						}}
					>
						<style.List>동물 찾기</style.List>
					</Link>
				)}
				{currentPage !== 'bookmark' && (
					<Link
						to="/bookmark"
						style={{ textDecoration: `none`, color: 'white' }}
					>
						<style.List>찜</style.List>
					</Link>
				)}
				{currentPage !== 'auth' && isLogin === false && (
					<Link
						to="/auth"
						style={{
							textDecoration: `none`,
							color: 'white',
						}}
					>
						<style.List>로그인</style.List>
					</Link>
				)}
				{isLogin === true && (
					<Link
						to="/"
						style={{
							textDecoration: `none`,
							color: 'white',
						}}
					>
						<style.List onClick={onLogout}>로그아웃</style.List>
					</Link>
				)}
			</style.NavList>
		</style.Navi>
	);
}

export default Nav;
