import http from "./httpService";
import { apiUrl } from "../config.json";

export const getMovie = (movieId) => {
  return http.get(apiUrl + "/movies/" + movieId);
};

export const getMovies = () => {
  return http.get(apiUrl + "/movies");
};

export const deleteMovie = (movieId) => {
  return http.delete(apiUrl + "/movies/" + movieId);
};

export const saveMovie = (movie) => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;

    http.put(apiUrl + "/movies/" + movie._id, body);
  } else {
    http.post(apiUrl + "/movies", movie);
  }
};
