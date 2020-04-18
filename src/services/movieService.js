import http from "./httpService";

export const getMovie = (movieId) => {
  return http.get("/movies/" + movieId);
};

export const getMovies = () => {
  return http.get("/movies");
};

export const deleteMovie = (movieId) => {
  return http.delete("/movies/" + movieId);
};

export const saveMovie = (movie) => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;

    http.put("/movies/" + movie._id, body);
  } else {
    http.post("/movies", movie);
  }
};
