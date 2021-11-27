import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../modules/rootReducer';
import { selectAction } from '../../modules/selectAnimal/select';
import * as style from './CheckStyle';
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

	return <>{isCheckOpen && <style.Span>{checkMessage}</style.Span>}</>;
}

export default Check;
