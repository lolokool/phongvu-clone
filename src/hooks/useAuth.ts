import { useContext } from "react";
import { AuthContext, AuthContextApi } from "../Context/AuthContext";

const useAuth = (): AuthContextApi => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("Forgot to wrap component in AuthContext");
  }

  return authContext;
};

export default useAuth;
