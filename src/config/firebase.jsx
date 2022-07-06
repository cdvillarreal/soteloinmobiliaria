import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCEiE3xid_guiX9qENU8c-rclhkiO3hibY',
	authDomain: 'inmobiliaria-48822.firebaseapp.com',
	projectId: 'inmobiliaria-48822',
	storageBucket: 'inmobiliaria-48822.appspot.com',
	messagingSenderId: '893280323923',
	appId: '1:893280323923:web:14f97d7543f8812ec579a6',
};

firebase.initializeApp(firebaseConfig);
firebase.auth = firebase.auth();
firebase.db = firebase.firestore();
export default firebase;
