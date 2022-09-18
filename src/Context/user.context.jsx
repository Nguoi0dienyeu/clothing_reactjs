import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { auth } from "../utils/Firebase/firebase.utils";

const UserContext = createContext();

export function useAuth() {
  return useContext(UserContext);
}
export const UserProvier = ({ children }) => {
  const [userCurrent, setUserCurrent] = useState();
  const [loading, setLoading] = useState(true);

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      setUserCurrent(user);
      setLoading(false);
    });
    return unsubcribe;
  }, []);

  const value = { userCurrent, signUp };
  return (
    <UserContext.Provider value={value}>
      {!loading && children}
    </UserContext.Provider>
  );
};
