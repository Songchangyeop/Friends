import axios from 'axios';

interface ParamType {
	city: number;
	kind: number | undefined;
	page: number;
}

const key = process.env.REACT_APP_API_KEY;

export async function getAnimal(param: ParamType) {
	const { city, kind, page } = param;
	const {
		data: {
			response: {
				body: {
					items: { item },
				},
			},
		},
	} = await axios({
		url: `https://cors-wait.herokuapp.com/http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc/abandonmentPublic?upr_cd=${city}&numOfRows=50&pageNo=${page}&upkind=${kind}&ServiceKey=${key}`,
		method: 'get',
	});

	return item;
}
