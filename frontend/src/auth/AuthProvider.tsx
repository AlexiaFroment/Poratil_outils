import { createContext, useEffect, useState } from "react";
import { AuthContextProps } from "@/modules/Types";

// CREATE CONTEXT
export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const authURL = "https://sso-ppd.carrefour.com:443/openam/oauth2/preprod";
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      setToken(getToken);
      setIsAuthenticated(true);
    } else {
      window.location.href = authURL;
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
