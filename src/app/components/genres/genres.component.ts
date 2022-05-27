import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services";
// import {IGenre} from "../../interfaces/genre.interface";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: any;

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getAllGenres().subscribe(value => this.genres = value)
  }

}
