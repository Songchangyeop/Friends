import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NavContainer from '../containers/NavContainer';
import { pageAction } from '../modules/CurrentPage/PageCheck';
import { ReducerType } from '../modules/rootReducer';

interface SelectedAnimal {
	selected: {
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
	};
}

function DetailPage() {
	const { ChangePage } = pageAction;
	const dispatch = useDispatch();

	const { selected } = useSelector<ReducerType, SelectedAnimal>(
		(state) => state.selectReducer
	);

	useEffect(() => {
		dispatch(ChangePage('detail'));
	}, []);

	return (
		<Main>
			<NavContainer />
			<Section>
				<img src={selected.popfile} alt="" />
			</Section>
		</Main>
	);
}

export default DetailPage;

const Main = styled.main`
	width: 100%;
	height: 100%;
`;

const Section = styled.section`
	width: 100%;
	height: 100%;
	padding: 3em;
`;
