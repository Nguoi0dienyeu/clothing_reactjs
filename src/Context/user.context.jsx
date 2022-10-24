import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { auth } from "../utils/Firebase/firebase.utils";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const UserContext = createContext();

export function useAuth() {
  return useContext(UserContext);
}
export function UserProvier({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    return auth.signOut();
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }
  useEffect(() => {
    const unsubsciber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubsciber;
  }, []);

  const value = { currentUser, signup, login, logout, resetPassword };
  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
}
