import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import theme from '../assets/styles/theme';
import { selectAction } from '../modules/selectAnimal/select';

interface ListProps {
	item: {
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

function List({ item }: ListProps) {
	console.log(item);
	const [gender, setGender] = useState('');
	useEffect(() => {
		switch (item.sexCd) {
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
	}, [item.sexCd]);

	const dispatch = useDispatch();

	const handleClickAnimal = () => {
		const { openModal } = selectAction;
		dispatch(openModal(item));
	};

	return (
		<Div onClick={handleClickAnimal} theme={theme}>
			<Img theme={theme} src={item.popfile} alt="img" />
			<Wrap theme={theme}>
				<Text theme={theme}>상태: {item.processState}</Text>
				<Text theme={theme}>성별: {gender}</Text>
				<Text theme={theme}>보호소: {item.careNm}</Text>
			</Wrap>
		</Div>
	);
}

export default React.memo(List);

// 디자인
const Up = keyframes`
  0% {
    transform: translateY(30%);
		opacity: 0;
  }

  100% {
    transform: translateY(0%);
		opacity: 1;
  }
`;

const Div = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
	height: 200px;
	margin: 1em;
	border: 1px solid #e8e7e6;
	border-radius: 0.5em;
	font-size: 0.7em;
	overflow-x: visible;
	cursor: pointer;
	transition: all 150ms ease;
	animation: ${Up} 1s ease;
	background-color: white;
	box-shadow: 6px 6px 8px 0px rgba(217, 217, 217, 1);

	&:hover {
		transform: scale(1.04);
		box-shadow: 10px 10px 12px 0px rgba(217, 217, 217, 1);
	}

	@media ${(props) => props.theme.mobile} {
		width: 100px;
		height: 150px;
	}
`;

const Img = styled.img`
	width: 100%;
	height: 150px;
	border-top-left-radius: 0.5em;
	border-top-right-radius: 0.5em;

	@media ${(props) => props.theme.mobile} {
		width: 100%;
		height: 100px;
	}
`;

const Wrap = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 0.4rem;

	@media ${(props) => props.theme.mobile} {
		padding: 0.2rem;
	}
`;

const Text = styled.span`
	font-size: 11px;
	font-family: 'Cafe24Oneprettynight';

	@media ${(props) => props.theme.mobile} {
		font-size: 6.5px;
	}
`;
