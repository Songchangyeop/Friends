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
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential: any = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const user = result.user;
				console.log(result);
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				console.log(error);
				console.log('에러발생');
			});
	}

	logout() {
		this.firebaseAuth.signOut();
	}

	onAuthChange(onUserChanged: { (user: { id: string }): void }) {
		this.firebaseAuth.onAuthStateChanged((user: any) => {
			onUserChanged(user);
		});
	}
}

export default AuthService;
