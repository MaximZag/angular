import {environment} from "../../environments/environment";

const {API} = environment;

export const urls = {
  movies: `${API}/discover/movie?api_key=e77bd741cd0b705c1841df139925cbcd`,
  genres: `${API}/genre/movie/list?api_key=e77bd741cd0b705c1841df139925cbcd`,
  movie: `${API}/movie`,
  person:'/person'
}

