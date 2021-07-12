import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	width: 40%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 1em;
	background-color: #12b886;
	color: white;
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
	dispatch: () => void;
}

function Finder({ dispatch }: FinderProps) {
	return (
		<Section>
			<Logo>🐶🐱</Logo>
			<p>도시 별 동물 찾기</p>
			<p>도시를 선택해서 유기동물들의 친구가 되어 주세요!</p>
			<Bar></Bar>
			<Select name="City" id="City-select">
				<option value="Seoul">Seoul</option>
				<option value="Ulsan">Ulsan</option>
				<option value="Busan">Busan</option>
				<option value="Daejeon">Daejeon</option>
				<option value="Daegu">Daegu</option>
				<option value="Gwangju">Gwangju</option>
			</Select>
			<Button onClick={dispatch}>찾기</Button>
		</Section>
	);
}

export default Finder;
