import { createContext } from "react";
import { useState } from "react";

export const AccountContext = createContext();

function UserContext({ children }) {
  // eslint-disable-next-line
  const [user, setUser] = useState({ loggedIn: null });
  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export default UserContext;
