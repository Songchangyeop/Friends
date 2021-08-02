import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Finder from '../components/Finder';
import { animalAction } from '../modules/animal';

function FinderContainer() {
	const [city, setCity] = useState(6110000);
	const [kind, setKind] = useState<number>();
	const { getData } = animalAction;
	const dispatch = useDispatch();

	const dispatchAnimal = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const param = {
				city: city,
				kind: kind,
			};
			if (kind === undefined) {
				return;
			}
			dispatch(getData(param));
		},
		[dispatch, getData, city, kind]
	);

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
		/>
	);
}

export default FinderContainer;
