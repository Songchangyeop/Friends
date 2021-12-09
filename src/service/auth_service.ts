import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { firebaseApp } from './firebase';

class AuthService {
	firebaseAuth: any;
	googleProvider: GoogleAuthProvider;
	getProvider: any;

	constructor() {
		this.firebaseAuth = getAuth(firebaseApp);
		this.googleProvider = new GoogleAuthProvider();
	}

	login() {
		try {
			signInWithPopup(this.firebaseAuth, this.googleProvider);
		} catch (error) {
			throw new Error('로그인 실패');
		}
	}

	logout() {
		this.firebaseAuth.signOut();
	}

	onAuthChange(onUserChanged: { (user: { uid: string }): void }) {
		this.firebaseAuth.onAuthStateChanged((user: any) => {
			onUserChanged(user);
		});
	}
}

export default AuthService;
