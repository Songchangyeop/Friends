import React from 'react';

import styled from 'styled-components';

const Li = styled.li`
	display: flex;
	flex-direction: column;
	width: 150px;
	height: 200px;
	list-style: none;
	cursor: pointer;
	margin: 1em;
	font-size: 0.7em;
	transition: all 200ms ease;

	&:hover {
		transform: scale(1.04);
	}
`;

const Img = styled.img`
	width: 100%;
	height: 150px;
	padding-bottom: 1em;
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
	return (
		<Li>
			<Img src={item.popfile} alt="img" />
			<span>상태: {item.processState}</span>
			<span>성별: {item.sexCd}</span>
			<span>보호소: {item.careNm}</span>
		</Li>
	);
}

export default List;
