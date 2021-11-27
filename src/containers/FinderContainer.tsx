import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Finder from '../components/Finder/Finder';
import { animalAction } from '../modules/getData/animal';
import { ReducerType } from '../modules/rootReducer';
import { AnimalType } from '../types/type';

interface ResponseType {
	animal: AnimalType[];
	param: {
		city: number;
		kind: number | undefined;
		page: number;
	};
}

function FinderContainer() {
	const [city, setCity] = useState(6110000);
	const [kind, setKind] = useState<number>();
	const [listOpen, setListOpen] = useState(false);
	const { animal, param } = useSelector<ReducerType, ResponseType>(
		(state) => state.animalReducer
	);
	const { getData } = animalAction;
	const dispatch = useDispatch();

	const dispatchAnimal = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const payloadParam = {
				city: city,
				kind: kind,
				page: 1,
			};
			if (kind === undefined || (kind === param.kind && city === param.city)) {
				return;
			}

			dispatch(getData(payloadParam));
		},
		[city, kind, param.kind, param.city, dispatch, getData]
	);

	useEffect(() => {
		animal.length > 0 && setListOpen(true);
	}, [animal]);

	const changeCity = useCallback((e) => {
		const { value } = e.target;

		switch (value) {
			case 'Seoul':
				setCity(6110000);
				return;
			case 'Busan':
				setCity(6260000);
				return;
			case 'Daegu':
				setCity(6270000);
				return;
			case 'Incheon':
				setCity(6280000);
				return;
			case 'Gwangju':
				setCity(6290000);
				return;
			case 'Ulsan':
				setCity(6310000);
				return;
			case 'Daejeon':
				setCity(6300000);
				return;
		}
	}, []);

	const changeKind = useCallback((kind) => {
		switch (kind) {
			case '🐶':
				setKind(417000);
				return;
			case '🐱':
				setKind(422400);
				return;
		}
	}, []);

	return (
		<Finder
			dispatch={dispatchAnimal}
			changeCity={changeCity}
			changeKind={changeKind}
			kindCode={kind}
			listOpen={listOpen}
		/>
	);
}

export default FinderContainer;
