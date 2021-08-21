import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../modules/rootReducer';
import List from '../components/List';
import styled, { css } from 'styled-components';
import { animalAction } from '../modules/getData/animal';
import { useCallback } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from '../components/Skeleton';
import Modal from '../components/Modal';

interface DescriptionParams {
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
}

interface Description {
	animal: DescriptionParams[];
	param: {
		city: number;
		kind: number | undefined;
		page: number;
	};
	isLoading: boolean;
}

interface Loading {
	isLoading: boolean;
}

interface Select {
	isSelect: boolean;
}

function ListContainer() {
	const [animalList, setAnimalList] = useState<DescriptionParams[]>([]);
	const { animal, param, isLoading } = useSelector<ReducerType, Description>(
		(state) => state.animalReducer
	);
	const { isSelect } = useSelector<ReducerType, Select>(
		(state) => state.selectReducer
	);

	const [page, setPage] = useState(2);
	const [ref, inView] = useInView();

	const dispatch = useDispatch();
	const { getData } = animalAction;

	const onIntersect = useCallback(() => {
		const scrollParam = { ...param, page: page };
		dispatch(getData(scrollParam));
	}, [dispatch, getData, page, param]);

	useEffect(() => {
		animal &&
			setAnimalList((animalList) => {
				const newAnimal = animalList.concat(animal);
				return newAnimal;
			});
		isLoading === false && setAnimalList([]);
	}, [animal, isLoading]);

	useEffect(() => {
		if (inView && isLoading) {
			if (animal.length >= 50) {
				setPage((prevState) => prevState + 1);
				onIntersect();
			}
		}
	}, [inView]);

	return (
		<>
			{isLoading === false && param.city !== 0 && <Skeleton />}
			{isLoading && (
				<Ul isLoading={isLoading}>
					{isSelect && <Modal />}
					{animalList &&
						animalList.map((item, index) =>
							animalList.length - 1 === index ? (
								<LI ref={ref} key={index}>
									<List key={item.desertionNo} item={item} />
								</LI>
							) : (
								<LI key={index}>
									<List key={item.desertionNo} item={item} />
								</LI>
							)
						)}
				</Ul>
			)}
		</>
	);
}

export default ListContainer;

const Ul = styled.ul<Loading>`
	${(props) =>
		props.isLoading === true &&
		css`
			flex: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			overflow-y: auto;
		`}
`;

const LI = styled.li`
	list-style: none;
`;
