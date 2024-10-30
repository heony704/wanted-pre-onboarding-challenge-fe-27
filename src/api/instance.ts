import axios from "axios";
import { getToken } from "../utils/token";

declare module "axios" {
  export interface AxiosRequestConfig {
    withAuth?: boolean;
  }
}

const baseURL = import.meta.env.VITE_BASE_URL;

if (!baseURL) {
  throw new Error("VITE_BASE_URL 환경 변수가 설정되지 않았습니다.");
}

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  if (config.withAuth) {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default instance;
