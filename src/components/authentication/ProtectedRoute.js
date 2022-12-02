//una protected route è una route a cui si puà accedere solo se autorizzati,
//nel nostro caso, se l'utente è loggato.

import { Navigate } from "react-router-dom";
import { useContext } from "react";
import AccountContext from "./../../context/AccountContext";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = useContext(AccountContext);
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children; // children rendered solo se l'utente è loggato
};
export default ProtectedRoute;
