import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../modules/rootReducer';
import List from '../components/List/List';
import styled, { css } from 'styled-components';
import { animalAction } from '../modules/getData/animal';
import { useCallback } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Loading from '../components/Loading/Loading';
import theme from '../assets/styles/theme';
import { AnimalType } from '../types/type';

interface Description {
	animal: AnimalType[];
	param: {
		city: number;
		kind: number | undefined;
		page: number;
	};
	isLoading: boolean;
}

interface isLoading {
	isLoading: boolean;
}

function ListContainer() {
	const [animalList, setAnimalList] = useState<AnimalType[]>([]);
	const { animal, param, isLoading } = useSelector<ReducerType, Description>(
		(state) => state.animalReducer
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
		setPage(2);
	}, [param.city, param.kind]);

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
			{isLoading === false && param.city !== 0 && animal.length > 1 && (
				<Loading />
			)}
			{isLoading && (
				<Ul isLoading={isLoading} theme={theme}>
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

const Ul = styled.ul<isLoading>`
	${(props) =>
		props.isLoading === true &&
		css`
			flex: 2;
			display: flex;
			flex-wrap: wrap;
			overflow-y: auto;
			justify-content: center;
			margin: 0;
			padding: 0;
		`}

	@media ${(props) => props.theme.mobile} {
		flex: 5;
	}
`;

const LI = styled.li`
	list-style: none;
`;
