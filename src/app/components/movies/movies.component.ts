import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
// import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(value => this.movies = value)
  }

}
