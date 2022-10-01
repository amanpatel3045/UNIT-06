import { createContext, useState } from "react";

// Create
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = (body) => {
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  };

  // const toggleIsAuth = () => {
  //   setIsAuth(!isAuth);
  // };

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
