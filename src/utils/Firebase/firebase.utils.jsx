// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  writeBatch,
} from "firebase/firestore";

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(firebasedb, collectionKey);
  const batch = writeBatch(firebasedb);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoryAndDocuments = async () => {
  const collectionRef = collection(firebasedb, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};
