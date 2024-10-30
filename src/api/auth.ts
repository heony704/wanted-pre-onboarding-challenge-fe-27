import instance from "./instance";

import { setToken } from "../utils/token";

interface AuthRequest {
  email: string;
  password: string;
}

interface AuthResponse {
  message: string;
  token: string;
}

export const signup = async (data: AuthRequest) => {
  const response = await instance.post<AuthResponse>("/users/create", data);

  const { token } = response.data;
  setToken(token);

  return response.data;
};

export const signin = async (data: AuthRequest) => {
  const response = await instance.post<AuthResponse>("/users/login", data);

  const { token } = response.data;
  setToken(token);

  return response.data;
};
