// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// create db firebase
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log("userDoc", userDocRef);

  const useSnapShot = await getDoc(userDocRef);
  console.log("useSnapShot", useSnapShot);
  console.log(".exit", useSnapShot.exists());

  if (!useSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    // try catch
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return userDocRef;
};
