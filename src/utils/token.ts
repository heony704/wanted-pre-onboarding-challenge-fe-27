export const getToken = () => {
  return localStorage.getItem("token");
};

export const setToken = (tokenValue: string) => {
  localStorage.setItem("token", tokenValue);
};

export const removeToken = () => {
  localStorage.removeItem("token");
};
