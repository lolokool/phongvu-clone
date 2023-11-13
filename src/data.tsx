export interface LoginRequest {
  email: string;
  password: string;
}
export interface ResponseLogin {
  email: string;
  password: string;
  client_id: string;
  device_name: string;
  unique_id: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export type AuthState = {
  userInfo: User | null;
  isAuthenticated: boolean;
};

export interface User {
  email: string;
  name: string;
}

export type LoginRegisterResponse = {
  accessToken?: string;
  refreshToken?: string;
} & User;

export interface Owned {
  productId: string;
  lastUse: number;
  intalled: number;
}

export interface IActivity {
  userId: string;
  device: string;
  lastUse: number;
  action: "login" | "changePassword";
}
