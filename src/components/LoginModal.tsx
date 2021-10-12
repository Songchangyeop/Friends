import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function LoginModal() {
	return (
		<Modal>
			<Span>로그인을 하시면 서비스 이용이 가능합니다</Span>
			<BtnWrap>
				<Link
					to="/auth"
					style={{
						textDecoration: `none`,
					}}
				>
					<Button type="button">
						<BtnText>로그인하러 가기</BtnText>
					</Button>
				</Link>

				<Link
					to="/"
					style={{
						textDecoration: `none`,
					}}
				>
					<Button type="button">
						<BtnText>메인 페이지로 가기</BtnText>
					</Button>
				</Link>
			</BtnWrap>
		</Modal>
	);
}

export default LoginModal;

const Modal = styled.div`
	position: relative;
	background-color: white;
	width: 40%;
	height: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-radius: 1em;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);
`;

const Span = styled.span`
	font-size: 1.4em;
`;

const BtnWrap = styled.div`
	position: absolute;
	display: flex;
	bottom: 1em;
	align-items: center;
	justify-content: space-around;
	width: 50%;
	height: auto;
`;

const Button = styled.button`
	font-size: 1em;
	width: auto;
	height: 2em;
	border: 0;
	border-radius: 0.5em;
	background-color: #e0e0e0;
	cursor: pointer;

	&:hover {
		background-color: #bdbdbd;
	}
`;

const BtnText = styled.span`
	font-size: 0.8em;
`;
