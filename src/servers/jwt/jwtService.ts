import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import axios from "axios";
import jwtDefaultConfig from "./jwtDefaultConfig";
import apiEndpoint from "../../constants/apiEndpoint";

const headers: AxiosRequestConfig["headers"] = {
  "Content-Type": "application/json",
  "Accept-Language": "vi",
};

export default class JwtService {
  // ** jwtConfig <= Will be used by this service
  jwtConfig = { ...jwtDefaultConfig };

  // ** For refreshing token
  isAlreadyFetchingAccessToken = false;

  subscribers: ((token: string) => void)[] = [];

  private httpInstance: AxiosInstance;

  constructor(jwtOverrideConfig: AxiosRequestConfig) {
    const httpInstance = axios.create({
      baseURL: "http://localhost:3456",
      timeout: 6000,
      headers,
    });

    this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };

    // ** request interceptor
    httpInstance.interceptors.request.use(
      (config: AxiosRequestConfig | any) => {
        try {
          const accessToken = localStorage.getItem(
            this.jwtConfig.accessTokenKey
          );
          if (accessToken) {
            config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
          }
          console.log("asadsdadd", accessToken);
          return config;
        } catch (error) {
          throw new Error();
        }
      },
      (error) => Promise.reject(error)
    );

    // ** add request/response interceptor
    httpInstance.interceptors.response.use(
      (response: AxiosResponse) => response.data,
      (error) => {
        const { config, response } = error;

        const originalRequest = { ...config };
        // ** if status === 401
        if (response && response.status === 401 && this.getRefreshToken()) {
          if (!this.isAlreadyFetchingAccessToken) {
            if (this.getRefreshToken()) {
              this.refreshToken()
                .then((res) => {
                  // TODO: must to optimize refresh Token
                  this.isAlreadyFetchingAccessToken = true;
                  // ** update accessToken in localStorage
                  this.setToken(res.data.access_token);
                  this.setRefreshToken(res.data.refresh_token);
                  this.onAccessTokenFetched(res.data.access_token);
                })
                .catch(() => {
                  localStorage.clear();
                  window.location.href = "/";
                });
            }
          }
          const retryOriginalRequest = new Promise((resolve) => {
            this.addSubscriber((accessToken: string) => {
              // ** change authorization header
              originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
              resolve(this.httpInstance(originalRequest));
            });
          });
          return retryOriginalRequest;
        }
        return Promise.reject(error.response?.data);
      }
    );

    this.httpInstance = httpInstance;
  }

  onAccessTokenFetched(accessToken: string) {
    this.subscribers = this.subscribers.filter(
      (callback: (token: string) => void) => callback(accessToken)
    );
  }

  addSubscriber(callback: (token: string) => void) {
    this.subscribers.push(callback);
  }

  setToken(value: string) {
    return localStorage.setItem(this.jwtConfig.accessTokenKey, value);
  }

  setRefreshToken(value: string) {
    return localStorage.setItem(this.jwtConfig.refreshTokenKey, value);
  }

  getToken() {
    return localStorage.getItem(this.jwtConfig.accessTokenKey);
  }

  getRefreshToken() {
    return localStorage.getItem(this.jwtConfig.refreshTokenKey) ?? "";
  }

  refreshToken() {
    try {
      const params = new URLSearchParams();
      if (this.getRefreshToken()) {
        const refreshToken: string = this.getRefreshToken();
        params.append("refreshToken", refreshToken);
        const res = this.httpInstance.post<string, AxiosResponse>(
          apiEndpoint.refreshToken,
          params,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        return res;
      }
      return Promise.reject();
    } catch (error: any) {
      throw new Error(error);
    }
  }

  getHttp() {
    return this.httpInstance;
  }
}
