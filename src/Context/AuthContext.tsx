import {
  LoginRegisterResponse,
  LoginRequest,
  RegisterRequest,
  User,
} from "../data";
import authApi from "../servers/api/au";
import { createContext, useEffect, useState } from "react";
import useForceUpdate from "../hooks/useForceUpdate";
import usingJwt from "../servers/jwt/usingJwt";
import { safeGetLocalStorageItem } from "../utils/safeGetLocalStorageItem";

export interface AuthContextApi {
  login: (data: LoginRequest) => Promise<boolean>;
  logout: () => void;
  register: (request: RegisterRequest) => void;
  user: User | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextApi>({
  login: async () => false,
  register: async () => {
    ("");
  },
  logout: () => null,
  user: null,
  isLoading: true,
});

const { jwt } = usingJwt({});

const config = jwt.jwtConfig;

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [rerender, forceUpdate] = useForceUpdate();

  const handleRegister = async (request: RegisterRequest) => {
    try {
      const res = await authApi.register(request);
      console.log("as", res);
      if (res.accessToken && res.refreshToken) {
        localStorage.setItem(config.accessTokenKey, res.accessToken);
        localStorage.setItem(config.refreshTokenKey, res.refreshToken);
      }
      setUser({ email: res.email, name: res.name });
      forceUpdate();
      console.log("asdas", user);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleLogin = async (request: LoginRequest) => {
    try {
      const res: LoginRegisterResponse = await authApi.login(request);
      if (res.accessToken && res.refreshToken) {
        localStorage.setItem(config.accessTokenKey, res.accessToken);
        localStorage.setItem(config.refreshTokenKey, res.refreshToken);
      }
      setUser({ email: res.email, name: res.name });
      forceUpdate;
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem(config.accessTokenKey);
    localStorage.removeItem(config.refreshTokenKey);
  };

  useEffect(() => {
    (async () => {
      const hasAccessToken = safeGetLocalStorageItem(config.accessTokenKey);
      if (!hasAccessToken) {
        setIsLoading(false);
        return;
      }

      try {
        const userInfo = await authApi.getUserInfo();
        setUser(userInfo);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rerender]);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        register: handleRegister,
        login: handleLogin,
        logout: handleLogout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
