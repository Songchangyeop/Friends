import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectAction } from '../modules/selectAnimal/select';

function Header() {
	const dispatch = useDispatch();
	const { closeModal } = selectAction;

	const CloseModal = () => {
		dispatch(closeModal());
	};

	return (
		<HeaderTag>
			<H1>친구가 되어주세요</H1>
			<Close>
				<span onClick={CloseModal}>Close</span>
			</Close>
		</HeaderTag>
	);
}

export default Header;

const HeaderTag = styled.header`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 0.3em;
	padding-top: 0.3em;
`;

const H1 = styled.h1`
	font-size: 1.5em;
	font-family: 'Cafe24Oneprettynight';
`;

const Close = styled.button`
	position: absolute;
	right: 1em;
	border: 0;
	background-color: #e0e0e0;
	border-radius: 1em;
	cursor: pointer;

	&:hover {
		background-color: #bdbdbd;
	}
`;
