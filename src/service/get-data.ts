import axios from 'axios';

interface ParamType {
	city: number;
	kind: number | undefined;
	page: number;
}

const key =
	'Rs6VFrkuCiM5A3qb%2Fh%2F%2BIe0ieawIWS7FA6yQygtC7%2FaMzfKCAg9mK73TVPHQ76hD9ZSr2rwzR%2FNJ367Y7Lz%2Big%3D%3D';

export async function getAnimal(param: ParamType) {
	const { city, kind, page } = param;
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
				'cors-proxy-url': `http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?upr_cd=${city}&numOfRows=50&pageNo=${page}&upkind=${kind}&ServiceKey=${key}`,
			},
		});
		return item;
	} catch (error) {
		console.log(error);
	}
}
