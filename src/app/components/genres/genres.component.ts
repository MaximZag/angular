import {Component, OnInit} from '@angular/core';

import {MovieService} from "../../services";
import {DataService} from "../../services/data.service";
import {IGenreResults} from "../../interfaces";
// import {IGenre} from "../../interfaces/genre.interface";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres: IGenreResults;

  constructor(private movieService: MovieService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.movieService.getAllGenres().subscribe(value => this.genres = value)
  }

  allFunction() {
    this.dataService.storage.next({pageId: 1, id: ''})
    this.dataService.name.next('All Movies')
  }
}
