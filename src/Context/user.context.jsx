import { createContext, useState } from "react";

export const UserContext = createContext({
  userCurrent: null,
  setUserCurrent: () => null,
});

export const UserProvier = ({ children }) => {
  const [userCurrent, setUserCurrent] = useState(null);
  // const value = useContext(UserContext);
  const value = { userCurrent, setUserCurrent };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
