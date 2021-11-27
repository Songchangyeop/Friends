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
		signInWithPopup(this.firebaseAuth, this.googleProvider)
			.then((result) => {
				const credential: any = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				const user = result.user;
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(error);
			});
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
