import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenre} from "../interfaces";
import {urls} from "../constants";
import {IMovie} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient:HttpClient) {
  }

  getAllGenres(): Observable<IGenre[]>{
    return this.httpClient.get<IGenre[]>(urls.genres)
  }

  getAllMovies():Observable<IMovie[]>{
    return this.httpClient.get<IMovie[]>(urls.movies)
  }

  getOneMovie(id:string):Observable<IMovie>{
    return this.httpClient.get<IMovie>(urls.movie+`/${id}?api_key=e77bd741cd0b705c1841df139925cbcd&append_to_response=casts,images`)
  }

}
