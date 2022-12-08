//una protected route è una route a cui si puà accedere solo se autorizzati,
//nel nostro caso, se l'utente è loggato.

import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return true;
  }
  return false;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/auth/signup" />;
};

export default ProtectedRoute;
