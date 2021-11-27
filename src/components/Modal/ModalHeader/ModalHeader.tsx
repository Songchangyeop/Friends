import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as style from './ModalHeaderStyle';
import theme from '../../../assets/styles/theme';
import { selectAction } from '../../../modules/selectAnimal/select';

function ModalHeader() {
	const dispatch = useDispatch();
	const { closeModal } = selectAction;

	const CloseModal = () => {
		dispatch(closeModal());
	};

	return (
		<style.HeaderTag>
			<Link to="/Detail" style={{ textDecoration: `none` }}>
				<style.Detail theme={theme}>자세히 보기</style.Detail>
			</Link>
			<style.H1 theme={theme}>친구가 되어주세요</style.H1>
			<style.Close onClick={CloseModal} theme={theme}>
				<style.Span theme={theme}>Close</style.Span>
			</style.Close>
		</style.HeaderTag>
	);
}

export default ModalHeader;
