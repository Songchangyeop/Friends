import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../modules/rootReducer';
import List from '../components/List';
import styled from 'styled-components';
import { useRef } from 'react';
import { animalAction } from '../modules/getData/animal';
import { useCallback } from 'react';
import { useState } from 'react';

const Ul = styled.ul`
	flex: 2;
	display: flex;
	flex-wrap: wrap;
	overflow-y: auto;
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

	let { page } = param;
	const scrollParam = { ...param, page: ++page };

	const ul = useRef<HTMLUListElement>(null);
	const div = useRef<HTMLDivElement>(null);
	const dispatch = useDispatch();
	const { getData } = animalAction;

	const onIntersect = useCallback(
		([entry]: any) => {
			if (entry.isIntersecting) {
				console.log('스크롤출력');
				dispatch(getData(scrollParam));
			}
		},
		[dispatch, getData]
	);

	useEffect(() => {
		animal &&
			setAnimalList((animalList) => {
				const newAnimal = animalList.concat(animal);
				console.log(newAnimal);
				return newAnimal;
			});

		isLoading === false && setAnimalList([]);
	}, [animal]);

	useEffect(() => {
		let observer: IntersectionObserver;
		if (isLoading && div) {
			observer = new IntersectionObserver(onIntersect, {
				root: ul.current as Element,
				threshold: 0.5,
			});
			observer.observe(div.current as Element);
		} else return;

		return () => observer && observer.disconnect();
	}, [isLoading, onIntersect]);

	return (
		<Ul ref={ul}>
			{animalList &&
				animalList.map((item) => <List key={item.desertionNo} item={item} />)}
			<div ref={div}></div>
		</Ul>
	);
	// return <List />;
}

export default ListContainer;
