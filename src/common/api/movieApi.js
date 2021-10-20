import axios from "axios";


export const fetchAllMovies = () => {
  return axios.get(`http://localhost:3003/movies`)
  .then((response) => response.data)
}
export const fetchMovieById = (id) => {
  debugger
  return axios.get(`http://localhost:3003/movies?id=${id}`)
  .then((response) => response.data)
}

