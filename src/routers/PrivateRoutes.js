import { useEffect } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

import useAuth from "../Auth/UseAuth";
import routes from "../Helpers/Routes";

const PrivateRoute = ({ ...props }) => {
  const location = useLocation();

  const { isLogged, user, login } = useAuth();

  useEffect(() => {
    if (!user) {
      const currentUser = localStorage.getItem("currentUser");
      currentUser && login({ userName: currentUser });
    }
  }, []);

  if (!isLogged()) {
    return (
      <Redirect
        to={{ pathname: routes.LoginPage, state: { from: location } }}
      />
    );
  }

  return <Route {...props} />;
};

export default PrivateRoute;
