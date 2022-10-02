import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { auth } from "../utils/Firebase/firebase.utils";
import {
  createUserWithEmailAndPassword,
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

  useEffect(() => {
    const unsubsciber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubsciber;
  }, []);

  const value = { currentUser, signup, login };
  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
}
