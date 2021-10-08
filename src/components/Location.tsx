import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from '../assets/styles/theme';
declare global {
	interface Window {
		kakao: any;
	}
}

interface props {
	address: {
		x: number;
		y: number;
	};
}

function Location({ address }: props) {
	useEffect(() => {
		console.log(address);
		let container = document.getElementById('map');
		let options = {
			center: new window.kakao.maps.LatLng(address.y, address.x),
			level: 3,
		};
		let map = new window.kakao.maps.Map(container, options);
		var markerPosition = new window.kakao.maps.LatLng(address.y, address.x);
		var marker = new window.kakao.maps.Marker({
			position: markerPosition,
		});
		marker.setMap(map);
	}, [address]);

	return (
		<Section>
			<Title theme={theme}>보호소 위치</Title>
			<Map theme={theme} id="map"></Map>
		</Section>
	);
}

export default Location;

const Section = styled.section`
	/* display: flex;
	flex-direction: column;
	align-items: center; */
`;

const Title = styled.span`
	font-size: 1.5em;
	font-weight: bold;
	/* color: ${(props) => props.theme.backgroundColor}; */
`;

const Map = styled.div`
	width: 500px;
	height: 400px;
	margin: 1em;

	@media ${(props) => props.theme.mobile} {
		width: 300px;
		height: 300px;
	}
`;
