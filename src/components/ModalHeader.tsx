import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import theme from '../assets/styles/theme';
import { selectAction } from '../modules/selectAnimal/select';

function Header() {
	const dispatch = useDispatch();
	const { closeModal } = selectAction;

	const CloseModal = () => {
		dispatch(closeModal());
	};

	return (
		<HeaderTag>
			<H1 theme={theme}>친구가 되어주세요</H1>
			<Close onClick={CloseModal} theme={theme}>
				<Span theme={theme}>Close</Span>
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

	@media ${(props) => props.theme.mobile} {
		font-size: 1.2em;
	}
`;

const Close = styled.button`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 4em;
	height: 2em;
	right: 1em;
	border: 0;
	background-color: #e0e0e0;
	border-radius: 1em;
	cursor: pointer;

	&:hover {
		background-color: #bdbdbd;
	}

	@media ${(props) => props.theme.mobile} {
		width: 3.2em;
		height: 1.6em;
	}
`;

const Span = styled.span`
	font-size: 1.2em;
	font-family: 'Cafe24Oneprettynight';

	@media ${(props) => props.theme.mobile} {
		font-size: 1em;
	}
`;
