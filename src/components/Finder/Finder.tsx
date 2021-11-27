import React from 'react';
import { useState } from 'react';
import * as style from './FinderStyle';
import NavContainer from '../../containers/NavContainer';
import theme from '../../assets/styles/theme';

interface FinderProps {
	dispatch: (e: React.FormEvent<HTMLFormElement>) => void;
	changeCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	changeKind: (kind: string) => void;
	kindCode: number | undefined;
	listOpen: boolean;
}

function Finder({
	dispatch,
	changeCity,
	changeKind,
	kindCode,
	listOpen,
}: FinderProps) {
	const [selectedKind, setSelectedKind] = useState('');

	const handleClickCheckbox = (e: React.MouseEvent<HTMLParagraphElement>) => {
		const { innerText } = e.currentTarget;
		setSelectedKind(innerText);
		changeKind(innerText);
	};

	return (
		<style.Section theme={theme} listOpen={listOpen}>
			<NavContainer />
			<style.Article listOpen={listOpen} theme={theme}>
				<style.Text theme={theme} listOpen={listOpen}>
					<p>도시 별 동물 찾기</p>
					<p>도시를 선택해서 유기동물들의 친구가 되어 주세요!</p>
				</style.Text>
				<style.Bar theme={theme} listOpen={listOpen}></style.Bar>
				<style.Form onSubmit={dispatch} theme={theme} listOpen={listOpen}>
					<style.Select
						name="City"
						id="City-select"
						onChange={changeCity}
						listOpen={listOpen}
						theme={theme}
					>
						<option value="Seoul">서울</option>
						<option value="Incheon">인천</option>
						<option value="Busan">부산</option>
						<option value="Daegu">대구</option>
						<option value="Ulsan">울산</option>
						<option value="Gwangju">광주</option>
						<option value="Daejeon">대전</option>
					</style.Select>
					<style.CheckWrap theme={theme}>
						<style.CheckDog
							onClick={handleClickCheckbox}
							selectedKind={selectedKind}
						>
							🐶
						</style.CheckDog>
						<style.CheckCat
							onClick={handleClickCheckbox}
							selectedKind={selectedKind}
						>
							🐱
						</style.CheckCat>
					</style.CheckWrap>
					{kindCode === undefined && (
						<style.Warning listOpen={listOpen} theme={theme}>
							찾고자하는 동물을 선택해주세요!
						</style.Warning>
					)}
					<style.Button type="submit" listOpen={listOpen} theme={theme}>
						찾기
					</style.Button>
				</style.Form>
			</style.Article>
		</style.Section>
	);
}

export default Finder;
