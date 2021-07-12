import React from 'react';

import styled from 'styled-components';

const Li = styled.li`
	width: 60%;
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
			ssasdfasdf
			<img src={item.filename} alt="img" />
		</Li>
	);
}

export default List;
