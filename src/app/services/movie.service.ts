import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IGenreResults, IResults} from "../interfaces";
import {urls} from "../constants";
import {IMovie} from "../interfaces";
import {IActor} from "../interfaces/actor.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAllGenres(): Observable<IGenreResults> {
    return this.httpClient.get<IGenreResults>(urls.genres)
  }

  getAllMovies(page: number, id: string): Observable<IResults> {
    return this.httpClient.get<IResults>(urls.movies + `&page=${page}&with_genres=${id}`)
  }

  getOneMovie(id: string): Observable<IMovie> {
    return this.httpClient.get<IMovie>(urls.movie + `/${id}?api_key=e77bd741cd0b705c1841df139925cbcd&append_to_response=casts,images`)
  }

  getOneActor(id: string): Observable<IActor> {
    return this.httpClient.get<IActor>(urls.person + `/${id}?api_key=e77bd741cd0b705c1841df139925cbcd&append_to_response=movie_credits`)
  }

}
