import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);
  const [code, setCode] = useState(null);

  const login = (userCredentials, fromLocation) => {
    setUser(userCredentials);
    if (fromLocation) {
      history.push(fromLocation);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  const isLogged = () => user;

  const contextValue = {
    user,
    code,
    setCode,
    isLogged,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
