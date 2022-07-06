import firebase from '../config/firebase';

export async function getAllProperties() {
	const querySnapshot = await firebase.db().collection('properties').get();
	return querySnapshot.docs;
}
