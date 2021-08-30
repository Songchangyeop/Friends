import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import NavContainer from '../containers/NavContainer';
import { pageAction } from '../modules/CurrentPage/PageCheck';

function Test() {
	const { ChagnePage } = pageAction;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ChagnePage('main'));
	}, []);

	return (
		<Main>
			<NavContainer />
			<MainSection>
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
					<MainImg src="img/main.png" alt="메인"></MainImg>
				</RightWrap>
			</MainSection>
			<CitySection>
				<LeftWrap>
					<CityImg src="img/city.png" alt="도시"></CityImg>
				</LeftWrap>
				<RightWrap>
					<Text>
						<Bold>찾고자 하는 도시를 선택해서 친구를 만들 수 있습니다</Bold>
						<Light>
							7개 도시의 유기동물 입양 정보와 실종 동물의 정보를 조회할 수
							있습니다
						</Light>
					</Text>
				</RightWrap>
			</CitySection>
			<ListSection>
				<LeftWrap>
					<Text>
						<Bold>
							친구가 되고 싶은 동물들을 찜해서 그 동물들의 정보를 조회할 수
							있습니다
						</Bold>
						<Light>입양하고자 하는 동물을 찜해서 따로 모아볼 수 있습니다</Light>
					</Text>
				</LeftWrap>
				<RightWrap>
					<ListImg src="img/list.png" alt="리스트"></ListImg>
				</RightWrap>
			</ListSection>
		</Main>
	);
}

export default Test;

const Main = styled.main`
	width: 100%;
	color: white;
`;

const MainSection = styled.section`
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

const MainImg = styled.img`
	width: 80%;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);
`;

const Bold = styled.span`
	font-size: 2em;
	font-weight: bold;
`;

const Light = styled.span`
	font-size: 1em;
	font-weight: lighter;
`;

const ListSection = styled.section`
	width: 100%;
	height: 65vh;
	display: flex;
	color: black;
`;

const CitySection = styled.section`
	width: 100%;
	height: 65vh;
	display: flex;
	color: black;
`;

const CityImg = styled.img`
	width: 18.5rem;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);
`;

const ListImg = styled.img`
	width: 33rem;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);
`;
