import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { auth } from "../utils/Firebase/firebase.utils";

const UserContext = createContext();

export function useAuth() {
  return useContext(UserContext);
}
export const UserProvier = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubsciber = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubsciber;
  }, []);

  const value = { currentUser, signUp };
  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};
