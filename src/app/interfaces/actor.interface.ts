import {IMovie} from "./movie.interface";

export interface IActor {
  name: string;
  birthdate: string;
  biography: string;
  popularity: string;
  movie_credits:{cast:IMovie[]}
}
