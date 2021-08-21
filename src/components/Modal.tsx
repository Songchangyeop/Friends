import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { ReducerType } from '../modules/rootReducer';
import Header from './Header';

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

function Modal() {
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

	return (
		<Div>
			<Header />
			<Img src={selected.popfile} alt="" />
			<Wrap>
				<Left>
					<Span>
						<b>나이</b>: {selected.age}
					</Span>
					<Span>
						<b>성별</b>: {gender}
					</Span>
					<Span>
						<b>상태</b>: {selected.processState}
					</Span>
					<Span>
						<b>몸무게</b>: {selected.weight}
					</Span>
					<Span>
						<b>종</b>: {selected.kindCd}
					</Span>
				</Left>
				<Right>
					<Span>
						<b>보호소</b>: {selected.careNm}
					</Span>
					<Span>
						<b>보호소 주소</b>: {selected.careAddr}
					</Span>
					<Span>
						<b>보호소 번호</b>: {selected.careTel}
					</Span>
					<Span>
						<b>담당 보호사</b>: {selected.chargeNm}
					</Span>
					<Span>
						<b>구조위치</b>: {selected.happenPlace}
					</Span>
				</Right>
			</Wrap>
		</Div>
	);
}

export default Modal;

const Scale = keyframes`
  0% {
    transform: scale(0);
  }

	80%{
		transform: scale(1.1);

	}

  100% {
		transform: scale(1.0);
  }
`;

const Div = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	flex-direction: column;
	/* border-radius: 1em; */
	padding: 1em;
	background-color: white;
	overflow-y: auto;
	width: 40%;
	height: 60%;
	animation: ${Scale} 300ms ease;
	z-index: 5;

	&::-webkit-scrollbar {
		width: 7px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #9e9e9e;
	}

	&::-webkit-scrollbar-track {
		background-color: #e0e0e0;
	}
`;

const Img = styled.img`
	width: 80%;
	height: 60%;
`;

const Span = styled.span`
	font-size: 0.9em;
	margin-top: 0.5em;
`;

const Left = styled.div`
	width: 50%;
	padding-top: 0.8em;
	height: auto;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

const Right = styled.div`
	width: 50%;
	padding-top: 0.8em;
	height: auto;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
`;

const Wrap = styled.div`
	width: 80%;
	height: 25%;
	display: flex;
	justify-content: space-between;
`;
