import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (userCredentials) => setUser({ id: 1});
    const logout = () => setUser(null);

    const isLogged = () => !!user;

    const contextValue = {
        user,
        isLogged,
        login,
        logout
    };

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;