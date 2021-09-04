import axios from 'axios';

interface ParamType {
	city: number;
	kind: number | undefined;
	page: number;
}

const key = process.env.API_KEY;

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
