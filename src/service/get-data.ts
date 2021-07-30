import axios from 'axios';

export async function getAnimal(cityParam: number) {
	try {
		const {
			data: {
				data: {
					response: {
						body: {
							items: { item },
						},
					},
				},
			},
		} = await axios({
			url: 'https://cors-proxy.org/api/',
			method: 'get',
			headers: {
				'cors-proxy-url': `http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?upr_cd=${cityParam}&numOfRows=50&upkind=422400&ServiceKey=Rs6VFrkuCiM5A3qb%2Fh%2F%2BIe0ieawIWS7FA6yQygtC7%2FaMzfKCAg9mK73TVPHQ76hD9ZSr2rwzR%2FNJ367Y7Lz%2Big%3D%3D`,
			},
		});
		return item;
	} catch (error) {
		console.log(error);
	}
}
