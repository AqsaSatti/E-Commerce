export interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  user?: any | null
}
export interface AuthContextProps extends AuthState {
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
}