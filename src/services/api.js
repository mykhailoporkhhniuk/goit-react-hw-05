import axios from "axios";

const options = {
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTRlOTJjYTAxZGRmMWQ1MTA3MWU0OGU2ZmEzN2M0ZSIsIm5iZiI6MTcyNjUwNDYwOC4zODc2OTgsInN1YiI6IjY2ZTcxZTVlOWRmYmJkZjBlNmNmOWRiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bLmKmn2JzcjMx_yfpACaRWWeNs4SEnKIkCYUq-ZZvVk",
    },
};

export const fetchTrendingMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const response = await axios.get(url, options);

  return response.data.results;
};

export const fetchMoviesDetails = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMoviesCredits = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/credits`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchMoviesReviews = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/reviews`;
  const response = await axios.get(url, options);

  return response.data;
};

export const fetchSearchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&page=1`;
  const response = await axios.get(url, options);

  return response.data;
};