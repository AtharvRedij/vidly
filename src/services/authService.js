import http from "./httpService";
import jwtDecode from "jwt-decode";

const tokenKey = "token";

export const login = async (email, password) => {
  const { data: jwt } = await http.post("/auth", {
    email,
    password,
  });
  localStorage.setItem(tokenKey, jwt);
};

export const loginWithJwt = (jwt) => {
  localStorage.setItem(tokenKey, jwt);
};

export const logout = () => {
  localStorage.removeItem(tokenKey);
};

export const getCurrentUser = () => {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const user = jwtDecode(jwt);
    return user;
  } catch (ex) {
    return null;
  }
};

export const getJwt = () => {
  return localStorage.getItem(tokenKey);
};

http.setJwt(getJwt());
