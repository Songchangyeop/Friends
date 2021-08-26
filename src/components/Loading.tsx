import React from 'react';
import styled, { keyframes } from 'styled-components';

function Loading() {
	return (
		<Div>
			<Img src="img/Loading.png" />
		</Div>
	);
}

export default Loading;

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Img = styled.img`
	width: 500px;
	height: 500px;
	animation: ${Spin} 5s linear infinite;
`;

const Div = styled.div`
	flex: 2;
	display: flex;
	justify-content: center;
	align-items: center;
`;