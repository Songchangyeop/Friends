import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Finder from '../components/Finder';
import { animalAction } from '../modules/animal';

function FinderContainer() {
	const { getData } = animalAction;
	const dispatch = useDispatch();

	const dispatchAnimal = useCallback(() => {
		dispatch(getData());
	}, [dispatch, getData]);

	return <Finder dispatch={dispatchAnimal} />;
}

export default FinderContainer;
