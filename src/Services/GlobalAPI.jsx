import axios from "axios";

const movieBaseURL = "https://api.themoviedb.org/3";
const apiKey = "f4733ea97c761c5bec74744af8288b68";

// https://api.themoviedb.org/3/trending/all/day?api_key=f4733ea97c761c5bec74744af8288b68
const getTrendingVideos = axios.get(movieBaseURL + "/trending/all/day?api_key=" + apiKey);
const getMovieByGenreId = (id) =>
  axios.get(`${movieBaseURL}/discover/movie?api_key=${apiKey}&with_genres=${id}`);


export default{
    getTrendingVideos,
    getMovieByGenreId
}