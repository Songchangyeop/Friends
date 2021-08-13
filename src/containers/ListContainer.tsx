import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../modules/rootReducer';
import List from '../components/List';
import styled from 'styled-components';
import { animalAction } from '../modules/getData/animal';
import { useCallback } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Ul = styled.ul`
	flex: 2;
	display: flex;
	flex-wrap: wrap;
	overflow-y: auto;
`;

const LI = styled.li`
	list-style: none;
`;

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
}

interface Test {
	isLoading: boolean;
}
function ListContainer({ isLoading }: Test) {
	const [animalList, setAnimalList] = useState<DescriptionParams[]>([]);
	const { animal, param } = useSelector<ReducerType, Description>(
		(state) => state.animalReducer
	);
	const [page, setPage] = useState(1);
	const [ref, inView] = useInView();

	const dispatch = useDispatch();
	const { getData } = animalAction;

	const onIntersect = useCallback(() => {
		const scrollParam = { ...param, page: page };
		console.log(scrollParam);
		dispatch(getData(scrollParam));
	}, [dispatch, getData, page]);

	useEffect(() => {
		animal &&
			setAnimalList((animalList) => {
				const newAnimal = animalList.concat(animal);
				return newAnimal;
			});

		isLoading === false && setAnimalList([]);
	}, [animal]);

	useEffect(() => {
		if (inView && isLoading) {
			if (animal.length >= 50) {
				setPage((prevState) => prevState + 1);
				onIntersect();
			}
		}
	}, [inView, isLoading]);

	return (
		<Ul>
			{animalList &&
				animalList.map((item, index) =>
					animalList.length - 1 === index ? (
						<LI ref={ref} key={index}>
							<List key={item.desertionNo} item={item} />
						</LI>
					) : (
						<LI>
							<List key={item.desertionNo} item={item} />
						</LI>
					)
				)}
		</Ul>
	);
	// return <List />;
}

export default ListContainer;
