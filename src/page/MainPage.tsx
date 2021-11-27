import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import theme from '../assets/styles/theme';
import Footer from '../components/Footer/Footer';
import NavContainer from '../containers/NavContainer';
import { pageAction } from '../modules/CurrentPage/PageCheck';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { firebaseApp } from '../service/firebase';
import { selectAction } from '../modules/selectAnimal/select';
import AuthService from '../service/auth_service';

interface AnimalType {
	age: number;
	careAddr: string;
	careNm: string;
	careTel: string;
	chargeNm: string;
	colorCd: string;
	desertionNo: number;
	filename: string;
	happenDt: number;
	happenPlace: string;
	kindCd: string;
	neuterYn: string;
	noticeEdt: number;
	noticeNo: string;
	noticeSdt: number;
	officetel: string;
	orgNm: string;
	popfile: string;
	processState: string;
	sexCd: string;
	specialMark: string;
	weight: string;
}

function MainPage() {
	const [userId, setUserId] = useState('');
	const { ChangePage } = pageAction;
	const dispatch = useDispatch();
	const { GetBookmark } = selectAction;
	const authService = new AuthService();

	const getData = useCallback((userId: string) => {
		const db = getDatabase(firebaseApp);
		const query = ref(db, `${userId}/bookmark`);
		let response: AnimalType[] = [];
		let temp: any[] = [];
		onValue(query, async (snapshot) => {
			response = [];
			temp = [];
			const value = await snapshot.val();
			value &&
				Object.entries(value).forEach((item) => {
					temp = [...item];
					response = [...response, temp[1].bookmark];
				});
			dispatch(GetBookmark(response));
		});
	}, []);

	useEffect(() => {
		dispatch(ChangePage('main'));
		userId && getData(userId);
	}, [ChangePage, dispatch, getData, userId]);

	useEffect(() => {
		authService.onAuthChange((user) => {
			user && setUserId(user.uid);
		});
	});

	return (
		<Main>
			<NavContainer />
			<MainSection theme={theme}>
				<MainWrap theme={theme}>
					<LeftWrap theme={theme}>
						<Text theme={theme}>
							<Bold theme={theme}>
								Friends는 전국의 유기동물에게 따듯한 손길을 전해주는
								서비스입니다.
							</Bold>
							<Light theme={theme}>
								유기동물 입양 정보와 실종 동물의 정보를 조회할 수 있습니다
							</Light>
						</Text>
					</LeftWrap>
					<RightWrap theme={theme}>
						<MainImg theme={theme} src="img/main.png" alt="메인"></MainImg>
					</RightWrap>
				</MainWrap>
			</MainSection>
			<CitySection theme={theme}>
				<LeftWrap theme={theme}>
					<CityImg theme={theme} src="img/city.png" alt="도시"></CityImg>
				</LeftWrap>
				<RightWrap theme={theme}>
					<Text theme={theme}>
						<Bold theme={theme}>
							찾고자 하는 도시를 선택해서 친구를 만들 수 있습니다
						</Bold>
						<Light theme={theme}>
							7개 도시의 유기동물 입양 정보와 실종 동물의 정보를 조회할 수
							있습니다
						</Light>
					</Text>
				</RightWrap>
			</CitySection>
			<ListSection theme={theme}>
				<LeftWrap theme={theme}>
					<Text theme={theme}>
						<Bold theme={theme}>
							친구가 되고 싶은 동물들을 찜해서 그 동물들의 정보를 조회할 수
							있습니다
						</Bold>
						<Light theme={theme}>
							입양하고자 하는 동물을 찜해서 따로 모아볼 수 있습니다
						</Light>
					</Text>
				</LeftWrap>
				<RightWrap theme={theme}>
					<ListImg theme={theme} src="img/list.png" alt="리스트"></ListImg>
				</RightWrap>
			</ListSection>
			<Footer />
		</Main>
	);
}

export default MainPage;

const Main = styled.main`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MainWrap = styled.div`
	display: flex;
	width: 75%;

	@media ${(props) => props.theme.mobile} {
		flex-direction: column-reverse;
		justify-content: center;
	}
`;

const MainSection = styled.section`
	width: 100%;
	height: 80vh;
	background-color: ${(props) => props.theme.backgroundColor};
	color: white;
	display: flex;
	justify-content: center;
`;

const LeftWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${(props) => props.theme.mobile} {
		margin-top: 1em;
		margin-bottom: 1em;
	}
`;

const Text = styled.div`
	width: 70%;
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-direction: column;

	@media ${(props) => props.theme.mobile} {
		width: 100%;
	}
`;

const RightWrap = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media ${(props) => props.theme.mobile} {
		margin-top: 1em;
		margin-bottom: 1em;
	}
`;

const MainImg = styled.img`
	width: 80%;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);

	@media ${(props) => props.theme.mobile} {
		width: 100%;
	}
`;

const Bold = styled.span`
	font-size: 2em;
	font-weight: bold;

	@media ${(props) => props.theme.mobile} {
		font-size: 1.2em;
		margin-bottom: 1em;
	}
`;

const Light = styled.span`
	font-size: 1em;
	font-weight: lighter;

	@media ${(props) => props.theme.mobile} {
		font-size: 0.9em;
	}
`;

const ListSection = styled.section`
	width: 75%;
	height: 65vh;
	display: flex;

	@media ${(props) => props.theme.mobile} {
		flex-direction: column-reverse;
		justify-content: center;
		height: auto;
	}
`;

const CitySection = styled.section`
	width: 75%;
	height: 65vh;
	display: flex;
	color: black;

	@media ${(props) => props.theme.mobile} {
		flex-direction: column;
		height: auto;
	}
`;

const CityImg = styled.img`
	margin-top: 1em;
	width: 18.5rem;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);

	@media ${(props) => props.theme.mobile} {
		width: 80%;
	}
`;

const ListImg = styled.img`
	width: 33rem;
	box-shadow: 0 0 19px rgb(0 0 0 / 50%);

	@media ${(props) => props.theme.mobile} {
		width: 100%;
	}
`;
