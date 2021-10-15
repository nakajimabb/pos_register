import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './firebaseConfig';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebase;