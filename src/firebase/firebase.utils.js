import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDiZGsWVFUu8xBNIVDIaG2ToAaVALpyrco",
    authDomain: "food-on-the-highway.firebaseapp.com",
    projectId: "food-on-the-highway",
    storageBucket: "food-on-the-highway.appspot.com",
    messagingSenderId: "789086963031",
    appId: "1:789086963031:web:2b53759c7a6965f5962a12"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if(!snapshot.exists){
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        ...additionalData,
        email,
        createdAt
      });
    } catch (error) {
      console.log('We have an error creating the user: ', error.message);
      console.log(error.code);
    }
  }

  return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();