//Idea per usare useContext per passare lo stato di log in all'applicazione
import { createContext } from "react";
import { useState, useEffect } from "react";

const AccountContext = createContext();

function UserContext({ children }) {
  // eslint-disable-next-line
  const [token, setToken] = useState(localStorage.getItem("user"));

  const doStorage = () => {
    localStorage.setItem("user", token);
  };

  return (
    <AccountContext.Provider value={{ token, doStorage }}>
      {children}
    </AccountContext.Provider>
  );
}

export { UserContext, AccountContext };
