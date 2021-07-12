import React from 'react';
import { useSelector } from 'react-redux';
import List from '../components/List';

interface AnimalItem {
	age: number;
	careAddr: string;
	careNm: string;
	careTel: string;
	chargeNm: string;
	colorCd: string;
	desertionNo: number;
	filename: string;
	happenDt: number;
	happenPlace: string;
	kindCd: string;
	neuterYn: string;
	noticeEdt: number;
	noticeNo: string;
	noticeSdt: number;
	officetel: string;
	orgNm: string;
	popfile: string;
	processState: string;
	sexCd: string;
	specialMark: string;
	weight: string;
}

interface AnimalState {
	animal: AnimalItem[];
}

function ListContainer() {
	console.log('List');

	const animal = useSelector((state: AnimalState) => state.animal);

	animal && console.log(animal);

	return <ul>{animal && animal.map((item) => <List item={item} />)}</ul>;
}

export default ListContainer;
