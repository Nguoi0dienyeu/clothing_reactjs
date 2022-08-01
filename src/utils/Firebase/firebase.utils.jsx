// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlc_pDa9Nbb80Rae9GWNw-h0IvHbq2DJY",
  authDomain: "clothing-weather.firebaseapp.com",
  projectId: "clothing-weather",
  storageBucket: "clothing-weather.appspot.com",
  messagingSenderId: "933666869802",
  appId: "1:933666869802:web:5d4dde822b917dc625e953",
  measurementId: "G-GYCS3PTVMB",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
console.log("firebaseApp", firebaseApp);

const googleProvider = new GoogleAuthProvider();

// popup sign-in
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
// create db firebase
export const firebasedb = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additinalInfomation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(firebasedb, "user", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // try catch
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additinalInfomation,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
