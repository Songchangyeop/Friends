import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavContainer from '../containers/NavContainer';
import { selectAction } from '../modules/selectAnimal/select';

function Test() {
	const { PageOpen } = selectAction;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(PageOpen(false));
	}, []);

	return (
		<Main>
			<NavContainer />
			<Section>
				<LeftWrap>
					<Text>
						<Bold>
							Friends는 전국의 유기동물에게 따듯한 손길을 전해주는 서비스입니다.
						</Bold>
						<Light>
							유기동물 입양 정보와 실종 동물의 정보를 조회할 수 있습니다
						</Light>
					</Text>
				</LeftWrap>
				<RightWrap>
					<Img src="img/main.png" alt="메인"></Img>
				</RightWrap>
			</Section>
		</Main>
	);
}

export default Test;

const Main = styled.main`
	width: 100%;
	color: white;
`;

const Section = styled.section`
	display: flex;
	width: 100%;
	height: 90vh;
	background-color: #12b886;
`;

const LeftWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Text = styled.div`
	width: 70%;
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;
`;

const RightWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Img = styled.img`
	width: 80%;
	box-shadow: 0px 0px 10px 0px rgba(217, 217, 217, 1);
`;

const Bold = styled.span`
	font-size: 2em;
	font-weight: bold;
`;

const Light = styled.span`
	font-size: 1em;
	font-weight: lighter;
`;
