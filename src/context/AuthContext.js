import { useState, createContext } from "react";

//estado inicial para el contexto
const authContextInitialState = {
  user: null,
  isAuthenticated: false,
  toggleAuth: () => null,
};

export const AuthContext = createContext(authContextInitialState);

// componente provider
const AuthContextProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState({
    user: null,
    isAuthenticated: false,
  });

  const toggleAuth = (user) =>
    setLoggedIn({
      user: user,
      isAuthenticated: !loggedIn.isAuthenticated,
    });

  return (
    <AuthContext.Provider value={{ ...loggedIn, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
