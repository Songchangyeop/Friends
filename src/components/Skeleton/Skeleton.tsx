import React from 'react';
import * as style from './SkeletonStyle';
import theme from '../../assets/styles/theme';

function Skeleton() {
	return (
		<style.Div theme={theme}>
			<style.Img theme={theme}>
				<style.Shimmer />
			</style.Img>
			<style.Wrap theme={theme}>
				<style.Text theme={theme}>
					<style.Shimmer />
				</style.Text>
				<style.Text theme={theme}>
					<style.Shimmer />
				</style.Text>
				<style.Text theme={theme}>
					<style.Shimmer />
				</style.Text>
			</style.Wrap>
		</style.Div>
	);
}

export default Skeleton;
