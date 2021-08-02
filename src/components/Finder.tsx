import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

interface FinderProps {
	dispatch: (e: React.FormEvent<HTMLFormElement>) => void;
	changeCity: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	changeKind: (kind: string) => void;
	kindCode: number | undefined;
}

interface Selected {
	selectedKind: string;
}

function Finder({ dispatch, changeCity, changeKind, kindCode }: FinderProps) {
	const [selectedKind, setSelectedKind] = useState('');

	const handleClickCheckbox = (e: React.MouseEvent<HTMLParagraphElement>) => {
		const { innerText } = e.currentTarget;
		setSelectedKind(innerText);
		changeKind(innerText);
	};
	return (
		<Section>
			<Logo>Friends</Logo>
			<p>도시 별 동물 찾기</p>
			<p>도시를 선택해서 유기동물들의 친구가 되어 주세요!</p>
			<Bar></Bar>
			<Form onSubmit={dispatch}>
				<Select name="City" id="City-select" onChange={changeCity}>
					<option value="Seoul">서울</option>
					<option value="Incheon">인천</option>
					<option value="Busan">부산</option>
					<option value="Daegu">대구</option>
					<option value="Ulsan">울산</option>
					<option value="Gwangju">광주</option>
					<option value="Daejeon">대전</option>
				</Select>
				<CheckWrap>
					<CheckDog onClick={handleClickCheckbox} selectedKind={selectedKind}>
						🐶
					</CheckDog>
					<CheckCat onClick={handleClickCheckbox} selectedKind={selectedKind}>
						🐱
					</CheckCat>
				</CheckWrap>
				{kindCode === undefined && (
					<Warning>찾고자하는 동물을 선택해주세요!</Warning>
				)}
				<Button type="submit">찾기</Button>
			</Form>
		</Section>
	);
}

export default Finder;
const Section = styled.section`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1em;
	background-color: #12b886;
	color: white;
`;

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Logo = styled.span`
	position: absolute;
	top: 1em;
	left: 1em;
	font-size: 2em;
	cursor: pointer;
`;

const Bar = styled.div`
	width: 2px;
	height: 5em;
	background-color: white;
`;

const Select = styled.select`
	margin-top: 1.5em;
	margin-bottom: 1.5em;
	padding-left: 3.5em;
	width: 10em;
	font-size: 1.5em;
`;

const Button = styled.button`
	width: 10rem;
	height: 3rem;
	margin-top: 1em;
	border: 0;
	border-radius: 1em;
	cursor: pointer;
`;

const CheckWrap = styled.div`
	width: 7rem;
	height: 5em;
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

const Warning = styled.span`
	color: #d50000;
`;
