import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as style from './MainPageStyle';
import theme from '../../assets/styles/theme';
import Footer from '../../components/Footer/Footer';
import NavContainer from '../../containers/NavContainer';
import { pageAction } from '../../modules/CurrentPage/PageCheck';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import { firebaseApp } from '../../service/firebase';
import { selectAction } from '../../modules/selectAnimal/select';
import { AnimalType } from '../../types/type';
import AuthService from '../../service/auth_service';
import { animalAction } from '../../modules/getData/animal';

function MainPage() {
	const [userId, setUserId] = useState('');
	const { ChangePage } = pageAction;
	const { initError } = animalAction;
	const dispatch = useDispatch();
	const { GetBookmark } = selectAction;
	const authService = new AuthService();

	const getData = useCallback((userId: string) => {
		const db = getDatabase(firebaseApp);
		const query = ref(db, `${userId}/bookmark`);
		let response: AnimalType[] = [];
		onValue(query, async (snapshot) => {
			const value = await snapshot.val();
			response = [];
			value &&
				Object.entries(value).forEach((item: [string, any]) => {
					response = [...response, item[1].bookmark];
				});
			dispatch(GetBookmark(response));
		});
	}, []);

	useEffect(() => {
		dispatch(ChangePage('main'));
		dispatch(initError());
		userId && getData(userId);
	}, [ChangePage, dispatch, getData, userId, initError]);

	useEffect(() => {
		authService.onAuthChange((user) => {
			user && setUserId(user.uid);
		});
	});

	return (
		<style.Main>
			<NavContainer />
			<style.MainSection theme={theme}>
				<style.MainWrap theme={theme}>
					<style.LeftWrap theme={theme}>
						<style.Text theme={theme}>
							<style.Bold theme={theme}>
								Friends는 전국의 유기동물에게 따듯한 손길을 전해주는
								서비스입니다.
							</style.Bold>
							<style.Light theme={theme}>
								유기동물 입양 정보와 실종 동물의 정보를 조회할 수 있습니다
							</style.Light>
						</style.Text>
					</style.LeftWrap>
					<style.RightWrap theme={theme}>
						<style.MainImg
							theme={theme}
							src="img/main.webp"
							alt="메인"
						></style.MainImg>
					</style.RightWrap>
				</style.MainWrap>
			</style.MainSection>
			<style.CitySection theme={theme}>
				<style.LeftWrap theme={theme}>
					<style.CityImg
						theme={theme}
						src="img/city.webp"
						alt="도시"
					></style.CityImg>
				</style.LeftWrap>
				<style.RightWrap theme={theme}>
					<style.Text theme={theme}>
						<style.Bold theme={theme}>
							찾고자 하는 도시를 선택해서 친구를 만들 수 있습니다
						</style.Bold>
						<style.Light theme={theme}>
							7개 도시의 유기동물 입양 정보와 실종 동물의 정보를 조회할 수
							있습니다
						</style.Light>
					</style.Text>
				</style.RightWrap>
			</style.CitySection>
			<style.ListSection theme={theme}>
				<style.LeftWrap theme={theme}>
					<style.Text theme={theme}>
						<style.Bold theme={theme}>
							친구가 되고 싶은 동물들을 찜해서 그 동물들의 정보를 조회할 수
							있습니다
						</style.Bold>
						<style.Light theme={theme}>
							입양하고자 하는 동물을 찜해서 따로 모아볼 수 있습니다
						</style.Light>
					</style.Text>
				</style.LeftWrap>
				<style.RightWrap theme={theme}>
					<style.ListImg
						theme={theme}
						src="img/list.webp"
						alt="리스트"
					></style.ListImg>
				</style.RightWrap>
			</style.ListSection>
			<Footer />
		</style.Main>
	);
}

export default MainPage;
