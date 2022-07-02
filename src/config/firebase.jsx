import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBgqZ8iH7FEeYrOhKNnTM-LFR1Afde2M_4',
	authDomain: 'soteloinmobiliaria.firebaseapp.com',
	projectId: 'soteloinmobiliaria',
	storageBucket: 'soteloinmobiliaria.appspot.com',
	messagingSenderId: '135133815845',
	appId: '1:135133815845:web:271517e22086e77c0c0bcc',
	measurementId: 'G-Y2EK2G9LTL',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
