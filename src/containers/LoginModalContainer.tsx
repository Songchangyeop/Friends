import React from 'react';
import styled from 'styled-components';
import LoginModal from '../components/LoginModal/LoginModal';

function LoginModalContainer() {
	return (
		<BackGround>
			<LoginModal />
		</BackGround>
	);
}

export default LoginModalContainer;

const BackGround = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 3;
`;
