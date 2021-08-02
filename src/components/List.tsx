import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
  0% {
    transform: translateY(30%);
		opacity: 0;
  }

  100% {
    transform: translateY(0%);
		opacity: 1;
  }
`;

const Li = styled.li`
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
	list-style: none;
	transition: all 150ms ease;
	animation: ${Spin} 1s ease;
	box-shadow: 6px 6px 8px 0px rgba(217, 217, 217, 1);

	&:hover {
		transform: scale(1.04);
		box-shadow: 10px 10px 12px 0px rgba(217, 217, 217, 1);
	}
`;

const Img = styled.img`
	width: 100%;
	height: 150px;
	padding-bottom: 1em;
	border-radius: 0.5em;
`;

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.3rem;
`;
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
	}, []);

	return (
		<Li>
			<Img src={item.popfile} alt="img" />
			<Wrap>
				<span>상태: {item.processState}</span>
				<span>성별: {gender}</span>
				<span>보호소: {item.careNm}</span>
			</Wrap>
		</Li>
	);
}

export default List;
