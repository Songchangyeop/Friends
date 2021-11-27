import React, { useState } from 'react';
import styled from 'styled-components';
import Skeleton from '../components/Skeleton/Skeleton';
import theme from '../assets/styles/theme';
function SkeletonContainer() {
	const [SkeletonArr] = useState([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
	]);

	return (
		<Ul theme={theme}>
			{SkeletonArr.map(() => (
				<Skeleton />
			))}
		</Ul>
	);
}

export default SkeletonContainer;

const Ul = styled.ul`
	flex: 2;
	display: flex;
	flex-wrap: wrap;
	overflow-y: auto;
	justify-content: center;
	margin: 0;

	@media ${(props) => props.theme.mobile} {
		flex: 5;
	}
`;
