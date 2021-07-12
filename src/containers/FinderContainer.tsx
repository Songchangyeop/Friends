import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Finder from '../components/Finder';
import { getDataAsync } from '../modules/animal';

interface FinderContainerProps {
	handleClickBtn: () => void;
}

function FinderContainer({ handleClickBtn }: FinderContainerProps) {
	const dispatch = useDispatch();

	const dispatchAnimal = useCallback(() => {
		dispatch(getDataAsync());
		handleClickBtn();
	}, [dispatch, handleClickBtn]);

	return <Finder dispatch={dispatchAnimal} />;
}

export default FinderContainer;
