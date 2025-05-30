import { createContext, useContext, useState } from "react";
import { getLoginDetails } from "../components/common/auth";

export const UserContext = createContext({});

export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextProvider({ children }) {
  let [user, setUser] = useState(getLoginDetails());
  console.log(user);
  let shared = {
    user,
    setUser,
  };
  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
