import React from 'react';
import * as style from './LoadingStyle';
import theme from '../../assets/styles/theme';

function Loading() {
	return (
		<style.Div theme={theme}>
			<style.Img src="img/Loading.png" theme={theme} />
		</style.Div>
	);
}

export default Loading;
