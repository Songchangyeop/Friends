import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as style from './ListStyle';
import theme from '../../assets/styles/theme';
import { selectAction } from '../../modules/selectAnimal/select';

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
	}, [item.sexCd]);

	const dispatch = useDispatch();

	const handleClickAnimal = () => {
		const { openModal } = selectAction;
		dispatch(openModal(item));
	};

	return (
		<style.Div onClick={handleClickAnimal} theme={theme}>
			<style.Img theme={theme} src={item.popfile} alt="img" />
			<style.Wrap theme={theme}>
				<style.Text theme={theme}>상태: {item.processState}</style.Text>
				<style.Text theme={theme}>성별: {gender}</style.Text>
				<style.Text theme={theme}>보호소: {item.careNm}</style.Text>
			</style.Wrap>
		</style.Div>
	);
}

export default React.memo(List);
