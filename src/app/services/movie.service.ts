import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IGenre} from "../interfaces/genre.interface";
import {urls} from "../constants";
import {IMovie} from "../interfaces/movie.interface";

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

}
