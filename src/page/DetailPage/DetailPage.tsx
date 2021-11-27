import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as style from './DetailPageStyle';
import theme from '../../assets/styles/theme';
import Check from '../../components/Check/Check';
import Location from '../../components/Location/Location';
import ModalFooter from '../../components/Modal/ModalFooter/ModalFooter';
import NavContainer from '../../containers/NavContainer';
import { pageAction } from '../../modules/CurrentPage/PageCheck';
import { ReducerType } from '../../modules/rootReducer';
import { SelectedAnimal } from '../../types/type';

declare global {
	interface Window {
		kakao: any;
	}
}

function DetailPage() {
	const [gender, setGender] = useState('');
	const [address, setAddress] = useState({
		x: 0,
		y: 0,
	});
	const { ChangePage } = pageAction;
	const dispatch = useDispatch();

	const { selected } = useSelector<ReducerType, SelectedAnimal>(
		(state) => state.selectReducer
	);

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
		let geocoder = new window.kakao.maps.services.Geocoder();

		let callback = (result: any, status: any) => {
			if (status === window.kakao.maps.services.Status.OK) {
				let X = parseFloat(result[0].x);
				let Y = parseFloat(result[0].y);
				const newAddress = {
					...address,
					x: X,
					y: Y,
				};

				setAddress(newAddress);
			}
		};

		geocoder.addressSearch(selected.careAddr, callback);
	}, []);

	return (
		<style.Main>
			<NavContainer />
			<style.Div>
				<style.Img src={selected.popfile} alt="AnimalImage" theme={theme} />
				<Check />
				<ModalFooter></ModalFooter>
			</style.Div>
			<style.Section theme={theme}>
				<style.LeftDetail theme={theme}>
					<style.DetailHeader theme={theme}>동물 정보</style.DetailHeader>
					<style.Table>
						<tr>
							<style.Th>공고번호</style.Th>
							<style.Td>{selected.noticeNo}</style.Td>
						</tr>
						<tr>
							<style.Th>나이 / 몸무게</style.Th>
							<style.Td>
								{selected.age} / {selected.weight}
							</style.Td>
						</tr>
						<tr>
							<style.Th>성별</style.Th>
							<style.Td>{gender}</style.Td>
						</tr>
						<tr>
							<style.Th>상태</style.Th>
							<style.Td>{selected.processState}</style.Td>
						</tr>
						<tr>
							<style.Th>종</style.Th>
							<style.Td>{selected.kindCd}</style.Td>
						</tr>
						<tr>
							<style.Th>특징</style.Th>
							<style.Td>{selected.specialMark}</style.Td>
						</tr>
					</style.Table>
				</style.LeftDetail>
				<style.RightDetail theme={theme}>
					<style.DetailHeader theme={theme}>보호소 정보</style.DetailHeader>
					<style.Table>
						<tbody>
							<tr>
								<style.Th>보호소</style.Th>
								<style.Td>{selected.careNm}</style.Td>
							</tr>
							<tr>
								<style.Th>보호소 주소</style.Th>
								<style.Td>{selected.careAddr}</style.Td>
							</tr>
							<tr>
								<style.Th>보호소 번호</style.Th>
								<style.Td>{selected.careTel}</style.Td>
							</tr>
							<tr>
								<style.Th>담당 보호사</style.Th>
								<style.Td>{selected.chargeNm}</style.Td>
							</tr>
							<tr>
								<style.Th>구조위치</style.Th>
								<style.Td>{selected.happenPlace}</style.Td>
							</tr>
							<tr>
								<style.Th>접수일시</style.Th>
								<style.Td>{selected.happenDt}</style.Td>
							</tr>
						</tbody>
					</style.Table>
				</style.RightDetail>
			</style.Section>
			{address.x > 0 && address.y > 0 && <Location address={address} />}
		</style.Main>
	);
}

export default DetailPage;
