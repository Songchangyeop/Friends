import React from 'react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../modules/rootReducer';
import List from '../components/List';
import styled from 'styled-components';

const Ul = styled.ul`
	width: 70%;
	display: flex;
	flex-wrap: wrap;
	overflow-y: auto;
`;

interface DescriptionParams {
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

interface Description {
	animal: DescriptionParams[];
}

interface Test {
	isLoading: boolean;
}
function ListContainer({ isLoading }: Test) {
	const { animal } = useSelector<ReducerType, Description>(
		(state) => state.animalReducer
	);

	return (
		<Ul>
			{animal &&
				animal.map((item) => <List key={item.desertionNo} item={item} />)}
		</Ul>
	);
	// return <List />;
}

export default ListContainer;
