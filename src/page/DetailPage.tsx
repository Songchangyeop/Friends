import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../assets/styles/theme';
import Check from '../components/Check';
import ModalFooter from '../components/ModalFooter';
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

	const [gender, setGender] = useState('');
	useEffect(() => {
		switch (selected.sexCd) {
			case 'F':
				setGender('암컷');
				break;
			case 'M':
				setGender('수컷');
				break;
			case 'Q':
				setGender('미상');
				break;
		}
	}, [selected.sexCd]);

	useEffect(() => {
		dispatch(ChangePage('detail'));
	}, []);

	return (
		<Main>
			<NavContainer />
			<Img src={selected.popfile} alt="AnimalImage" />
			<Check />
			<ModalFooter></ModalFooter>
			<Section>
				<LeftDetail>
					<DetailHeader theme={theme}>동물 정보</DetailHeader>
					<Table>
						<tr>
							<Th>공고번호</Th>
							<Td>{selected.noticeNo}</Td>
						</tr>
						<tr>
							<Th>나이 / 몸무게</Th>
							<Td>
								{selected.age} / {selected.weight}
							</Td>
						</tr>
						<tr>
							<Th>성별</Th>
							<Td>{gender}</Td>
						</tr>
						<tr>
							<Th>상태</Th>
							<Td>{selected.processState}</Td>
						</tr>
						<tr>
							<Th>종</Th>
							<Td>{selected.kindCd}</Td>
						</tr>
						<tr>
							<Th>특징</Th>
							<Td>{selected.specialMark}</Td>
						</tr>
					</Table>
				</LeftDetail>
				<RightDetail>
					<DetailHeader theme={theme}>보호소 정보</DetailHeader>
					<Table>
						<tr>
							<Th>보호소</Th>
							<Td>{selected.careNm}</Td>
						</tr>
						<tr>
							<Th>보호소 주소</Th>
							<Td>{selected.careAddr}</Td>
						</tr>
						<tr>
							<Th>보호소 번호</Th>
							<Td>{selected.careTel}</Td>
						</tr>
						<tr>
							<Th>담당 보호사</Th>
							<Td>{selected.chargeNm}</Td>
						</tr>
						<tr>
							<Th>구조위치</Th>
							<Td>{selected.happenPlace}</Td>
						</tr>
						<tr>
							<Th>접수일시</Th>
							<Td>{selected.happenDt}</Td>
						</tr>
					</Table>
				</RightDetail>
			</Section>
		</Main>
	);
}

export default DetailPage;

const Main = styled.main`
	width: 100%;
	height: 90vh;
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const Section = styled.section`
	width: 90%;
	height: 100%;
	padding: 2em;
	display: flex;
`;

const Img = styled.img`
	width: 40%;
	height: 60%;
	border-radius: 0.5em;
	margin-bottom: 3em;
	margin-top: 2em;
`;

const Table = styled.table`
	width: 95%;
	margin-top: 1em;
	border-top: 2px solid black;
	/* border-spacing: 0; */
`;

const Th = styled.th`
	width: 20%;
	border-bottom: 1px solid #efefef;
`;

const Td = styled.td`
	padding: 0.9em;
	border-bottom: 1px solid #efefef;
	text-align: right;
`;

const LeftDetail = styled.div`
	width: 50%;
`;

const RightDetail = styled.div`
	width: 50%;
`;

const DetailHeader = styled.span`
	font-size: 2em;
	font-weight: bold;
	color: ${(props) => props.theme.backgroundColor};
`;
