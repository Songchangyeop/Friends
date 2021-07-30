import React from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Finder from '../components/Finder';
import { animalAction } from '../modules/animal';

function FinderContainer() {
	const [selected, setSelected] = useState(6110000);

	const { getData } = animalAction;
	const dispatch = useDispatch();

	const dispatchAnimal = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const param = {
				city: selected,
			};
			dispatch(getData(param));
		},
		[dispatch, getData, selected]
	);

	const changeSelected = useCallback((e) => {
		const { value } = e.target;

		switch (value) {
			case 'Seoul':
				setSelected(6110000);
				return;
			case 'Busan':
				setSelected(6260000);
				return;
			case 'Daegu':
				setSelected(6270000);
				return;
			case 'Incheon':
				setSelected(6280000);
				return;
			case 'Gwangju':
				setSelected(6290000);
				return;
			case 'Ulsan':
				setSelected(6310000);
				return;
			case 'Daejeon':
				setSelected(6300000);
				return;
		}
	}, []);

	return <Finder dispatch={dispatchAnimal} changeSelected={changeSelected} />;
}

export default FinderContainer;
