import axios from "axios";
import {
  RegisterRequest,
  LoginRequest,
  User,
  LoginRegisterResponse,
} from "../../data";
import useJwt from "../../utils/useJwt";

const authApi = {
  register(request: RegisterRequest) {
    return useJwt
      .post<string, LoginRegisterResponse>("/auth/register", request)
      .catch((error: any) => {
        throw new Error(error);
      });
  },
  login(request: LoginRequest) {
    return axios
      .post("http://localhost:3456/auth/login", request)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  },
  getUserInfo() {
    try {
      return useJwt.get("/auth/me");
    } catch (error: any) {
      throw new Error(error);
    }
  },
  changePassword(request: { oldPassword: string; newPassword: string }) {
    try {
      return useJwt.post("cc", request);
    } catch (error: any) {
      throw new Error(error);
    }
  },
  changeInfo(request: {
    name: string;
    phoneNumber: string;
    birthDate: number;
  }) {
    try {
      return useJwt.post<string, User>("/account/change-info", request);
    } catch (error: any) {
      throw new Error(error);
    }
  },
};

export default authApi;
