import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBg79AuIf2i_3ZMBJBkPHPbiU1P-Tki_pc",
  authDomain: "crown-clothing-shop.firebaseapp.com",
  databaseURL: "https://crown-clothing-shop.firebaseio.com",
  projectId: "crown-clothing-shop",
  storageBucket: "crown-clothing-shop.appspot.com",
  messagingSenderId: "190221713115",
  appId: "1:190221713115:web:88b17cef97c9e22f3b16fe",
  measurementId: "G-CVKWBBTT13"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;