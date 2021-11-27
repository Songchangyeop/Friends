import React, { useEffect } from 'react';
import theme from '../../assets/styles/theme';
import * as style from './LocationStyle';

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
		<style.Section>
			<style.Title theme={theme}>보호소 위치</style.Title>
			<style.Map theme={theme} id="map"></style.Map>
		</style.Section>
	);
}

export default Location;
