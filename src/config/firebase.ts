import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const config = {
	apiKey: 'AIzaSyCcKi4C_gllWahd1Uzp9_DXpor0959HKAA',
	authDomain: 'laanit-14919.firebaseapp.com',
	projectId: 'laanit-14919',
	storageBucket: 'laanit-14919.appspot.com',
	messagingSenderId: '224184612606',
	appId: '1:224184612606:web:f3540eca1289d9184957af',
	measurementId: 'G-Y50LF5K1E1'
};

// Initialize Firebase
const app = initializeApp(config);

const auth = getAuth(app);
const functions = getFunctions(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export function docToJSON(doc: any) {
	const data = doc.data();
	return {
		...data,
		id: doc.id,
		createdAt: data?.createdAt?.toMillis() || 0,
		updatedAt: data?.updatedAt?.toMillis() || 0,
		date: data?.date?.toMillis() || 0
	};
}

export { firestore, auth, functions, storage };
