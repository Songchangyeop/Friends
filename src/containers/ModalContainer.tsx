import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Modal from '../components/Modal/Modal';
import { ReducerType } from '../modules/rootReducer';
import { SelectedAnimal } from '../types/type';

function ModalContainer() {
	const { selected } = useSelector<ReducerType, SelectedAnimal>(
		(state) => state.selectReducer
	);

	const [gender, setGender] = useState('');
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

	return (
		<Container>
			<Modal selected={selected} gender={gender} />
		</Container>
	);
}

export default ModalContainer;

const Container = styled.div`
	opacity: 1;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
