import { firebaseApp } from './firebase';
import { getDatabase, ref, set, remove, onValue, off } from 'firebase/database';

interface BookmarkType {
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

const db = getDatabase(firebaseApp);

export async function syncBookmark(userId: string) {
	try {
		const query = ref(db, `${userId}/bookmark`);
		onValue(query, (snapshot) => {
			const value = snapshot.val();
			return value;
		});
	} catch (error) {
		console.log(error);
	}
}

export async function addBookmark(userId: string, bookmark: BookmarkType) {
	try {
		set(ref(db, `${userId}/bookmark/${bookmark.desertionNo}`), bookmark);
	} catch (error) {
		console.log(error);
	}
}

export async function removeBookmark(userId: string, BookmarkId: number) {
	try {
		remove(ref(db, `${userId}/bookmark/${BookmarkId}`));
	} catch (error) {
		console.log(error);
	}
}
