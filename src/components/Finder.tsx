import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	width: 30%;
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
	margin-bottom: 2em;
	padding-left: 3.5em;
	width: 10em;
	font-size: 1.5em;
`;

const Button = styled.button`
	width: 10rem;
	height: 3rem;
	margin-top: 2em;
	border: 0;
	border-radius: 1em;
	cursor: pointer;
`;

interface FinderProps {
	dispatch: (e: React.FormEvent<HTMLFormElement>) => void;
	changeSelected: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Finder({ dispatch, changeSelected }: FinderProps) {
	return (
		<Section>
			<Logo>🐶🐱</Logo>
			<p>도시 별 동물 찾기</p>
			<p>도시를 선택해서 유기동물들의 친구가 되어 주세요!</p>
			<Bar></Bar>
			<Form onSubmit={dispatch}>
				<Select name="City" id="City-select" onChange={changeSelected}>
					<option value="Seoul">서울</option>
					<option value="Incheon">인천</option>
					<option value="Busan">부산</option>
					<option value="Daegu">대구</option>
					<option value="Ulsan">울산</option>
					<option value="Gwangju">광주</option>
					<option value="Daejeon">대전</option>
				</Select>
				<Button type="submit">찾기</Button>
			</Form>
		</Section>
	);
}

export default Finder;
