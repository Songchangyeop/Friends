import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { ReducerType } from '../modules/rootReducer';
import { selectAction } from '../modules/selectAnimal/select';

interface CheckMessage {
	checkMessage: string;
	isCheckOpen: boolean;
}

function Check() {
	const { checkMessage, isCheckOpen } = useSelector<ReducerType, CheckMessage>(
		(state) => state.selectReducer
	);
	const dispatch = useDispatch();
	const { CloseCheck } = selectAction;
	useEffect(() => {
		if (isCheckOpen) {
			setTimeout(() => {
				dispatch(CloseCheck(false));
			}, 1000);
		}
	}, [CloseCheck, dispatch, isCheckOpen]);

	return <>{isCheckOpen && <Span>{checkMessage}</Span>}</>;
}

export default Check;

const Opacity = keyframes`
	0%{
		opacity: 0;
	}

	50%{
		opacity: 1;
	}
`;

const Span = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	width: auto;
	padding: 0.5em;
	height: 2em;
	border-radius: 1em;
	background-color: chocolate;
	bottom: 2em;
	animation: ${Opacity} 300ms ease;
`;
