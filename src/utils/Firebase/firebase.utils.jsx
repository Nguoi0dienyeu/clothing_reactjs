// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyAlc_pDa9Nbb80Rae9GWNw-h0IvHbq2DJY",
  apiKey: "AIzaSyAlc_pDa9Nbb80Rae9GWNw-h0IvHbq2DJY",
  authDomain: "clothing-weather.firebaseapp.com",
  projectId: "clothing-weather",
  storageBucket: "clothing-weather.appspot.com",
  messagingSenderId: "933666869802",
  appId: "1:933666869802:web:5d4dde822b917dc625e953",
  measurementId: "G-GYCS3PTVMB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const googleProvider = new GoogleAuthProvider();

// // popup sign-in
// googleProvider.setCustomParameters({
//   prompt: "select_account",
// });

const auth = getAuth(app);

// export const signInWithGooglePopup = () =>
//   signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);
// // create db firebase
const firebasedb = getFirestore();
// const provider = new GoogleAuthProvider();
export { app, auth };
// export { provider };
export default firebasedb;

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
