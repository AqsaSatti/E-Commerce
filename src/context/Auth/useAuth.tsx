import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProps, AuthState } from "./useAuth.Interface";
import { updateTokenState } from "../../components/API/AuthHelper";
import { HTTPMethod } from "../../utils/HTTPMethods";
import { APIHandler } from "../../utils/APIHandler";

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authState, setAuthState] = useState<AuthState>({
    accessToken: null,
    refreshToken: null,
    user: null,
  });
  const { accessToken, refreshToken } = authState;

  const fetchCurrentUser = async () => {
    try {
      const response = await APIHandler(HTTPMethod.GET, "/auth/me");
      setAuthState((prevState) => ({
        ...prevState,
        user: response,
      }));
      console.log('userData', response)
    } catch (error) {
      console.error("Error fetching user in dashborad:", error);
    }
  };

  useEffect(() => {
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');

    updateTokenState({ accessToken:storedAccessToken, refreshToken:storedRefreshToken });
  }, [authState]);

  useEffect(() => {
    fetchCurrentUser();
  }, [accessToken, refreshToken]);

  return (
    <AuthContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a TokenProvider");
  }
  return context;
};
