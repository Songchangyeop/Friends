import React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import NavContainer from '../containers/NavContainer';
import theme from '../assets/styles/theme';

interface FinderProps {
	dispatch: (e: React.FormEvent<HTMLFormElement>) => void;
	changeCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	changeKind: (kind: string) => void;
	kindCode: number | undefined;
	listOpen: boolean;
}

interface ListOpen {
	listOpen: boolean;
}

interface Selected {
	selectedKind: string;
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
		<Section theme={theme} listOpen={listOpen}>
			<NavContainer />
			<Article listOpen={listOpen} theme={theme}>
				<Text theme={theme} listOpen={listOpen}>
					<p>도시 별 동물 찾기</p>
					<p>도시를 선택해서 유기동물들의 친구가 되어 주세요!</p>
				</Text>
				<Bar theme={theme} listOpen={listOpen}></Bar>
				<Form onSubmit={dispatch} theme={theme} listOpen={listOpen}>
					<Select
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
					</Select>
					<CheckWrap theme={theme}>
						<CheckDog onClick={handleClickCheckbox} selectedKind={selectedKind}>
							🐶
						</CheckDog>
						<CheckCat onClick={handleClickCheckbox} selectedKind={selectedKind}>
							🐱
						</CheckCat>
					</CheckWrap>
					{kindCode === undefined && (
						<Warning listOpen={listOpen} theme={theme}>
							찾고자하는 동물을 선택해주세요!
						</Warning>
					)}
					<Button type="submit" listOpen={listOpen} theme={theme}>
						찾기
					</Button>
				</Form>
			</Article>
		</Section>
	);
}

export default Finder;
const Section = styled.section<ListOpen>`
	flex: 1;
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.backgroundColor};
	color: white;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				height: 3.5em;
			}
		`}
`;

const Article = styled.article<ListOpen>`
	width: 100%;
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				height: 3.5em;
			}
		`}
`;

const Text = styled.div<ListOpen>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				display: none;
			}
		`}
`;

const Form = styled.form<ListOpen>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				width: 90%;
				flex-direction: row;
				justify-content: space-between;
			}
		`}
`;

const Bar = styled.div<ListOpen>`
	width: 2px;
	height: 5em;
	background-color: white;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				display: none;
			}
		`}
`;

const Select = styled.select<ListOpen>`
	margin-top: 1.5em;
	margin-bottom: 1.5em;
	padding-left: 3.5em;
	width: 10em;
	font-size: 1.5em;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				width: 5em;
				padding-left: 1.3em;
				margin: 0;
			}
		`}
`;

const Button = styled.button<ListOpen>`
	width: 10rem;
	height: 3rem;
	margin-top: 1em;
	border: 0;
	border-radius: 1em;
	cursor: pointer;
	transition: all 150ms ease;
	background-color: white;

	&:hover {
		box-shadow: 0 0 19px rgb(0 0 0 / 25%);
	}

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				width: 3.5em;
				height: 2em;
				margin: 0;
			}
		`}
`;

const CheckWrap = styled.div`
	width: 7rem;
	display: flex;
	justify-content: space-between;
`;

const CheckDog = styled.p<Selected>`
	font-size: 2.5em;
	margin: 0;
	cursor: pointer;
	transition: all 200ms ease;

	&:hover {
		transform: scale(1.2);
	}

	transform: ${(props) =>
		props.selectedKind === '🐶' ? 'scale(1.2)' : 'scale(1.0)'};
`;

const CheckCat = styled.p<Selected>`
	font-size: 2.5em;
	margin: 0;
	cursor: pointer;
	transition: all 200ms ease;

	&:hover {
		transform: scale(1.2);
	}

	transform: ${(props) =>
		props.selectedKind === '🐱' ? 'scale(1.2)' : 'scale(1.0)'};
`;

const Warning = styled.span<ListOpen>`
	margin-top: 1em;
	margin-bottom: 0.5em;
	color: #d50000;

	${(props) =>
		props.listOpen &&
		css`
			@media ${(props) => props.theme.mobile} {
				display: none;
			}
		`}
`;
