import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { selectAction } from '../../modules/selectAnimal/select';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader/ModalHeader';
import Check from '../Check/Check';
import theme from '../../assets/styles/theme';
import * as style from './ModalStyle';

interface PropType {
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
	gender: string;
}

function Modal({ selected, gender }: PropType) {
	const modalRef = useRef<HTMLDivElement>(null);
	const { closeModal } = selectAction;
	const dispatch = useDispatch();

	const handleClickOutside = (e: any) => {
		if (!modalRef.current?.contains(e.target)) dispatch(closeModal());
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	return (
		<style.Div ref={modalRef} theme={theme}>
			<ModalHeader />
			<style.Img src={selected.popfile} alt="popfile" theme={theme} />
			<style.Wrap theme={theme}>
				<style.Left>
					<style.Span>
						<b>나이</b>: {selected.age}
					</style.Span>
					<style.Span>
						<b>성별</b>: {gender}
					</style.Span>
					<style.Span>
						<b>상태</b>: {selected.processState}
					</style.Span>
					<style.Span>
						<b>몸무게</b>: {selected.weight}
					</style.Span>
					<style.Span>
						<b>종</b>: {selected.kindCd}
					</style.Span>
					<style.Span>
						<b>특징</b>: {selected.specialMark}
					</style.Span>
				</style.Left>
				<style.Right>
					<style.Span>
						<b>보호소</b>: {selected.careNm}
					</style.Span>
					<style.Span>
						<b>보호소 주소</b>: {selected.careAddr}
					</style.Span>
					<style.Span>
						<b>보호소 번호</b>: {selected.careTel}
					</style.Span>
					<style.Span>
						<b>담당 보호사</b>: {selected.chargeNm}
					</style.Span>
					<style.Span>
						<b>구조위치</b>: {selected.happenPlace}
					</style.Span>
				</style.Right>
			</style.Wrap>
			<Check />
			<ModalFooter />
		</style.Div>
	);
}

export default Modal;
