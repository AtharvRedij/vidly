import http from "./httpService";
import { apiUrl } from "../config.json";

export const register = (user) => {
  return http.post(apiUrl + "/users", {
    email: user.username,
    password: user.password,
    name: user.name,
  });
};
