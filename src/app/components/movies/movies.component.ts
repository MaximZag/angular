import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
import {DataService} from "../../services/data.service";

// import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: any;

  constructor(private movieService: MovieService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.storage.subscribe(value => {
      this.movieService.getAllMovies(value.id).subscribe(value => this.movies = value)
    })
  }
}
