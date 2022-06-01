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
      this.movieService.getAllMovies(value.pageId, value.id).subscribe(value => this.movies = value)
    })
  }

  paginationUp() {
    let up = this.dataService.storage.getValue()
    if (this.movies.total_pages >= 500 && up.pageId < 500) {
      up.pageId++
    } else if (this.movies.total_pages < 500 && up.pageId < this.movies.total_pages) {
      up.pageId++
    }
    return this.dataService.storage.next({pageId: up.pageId, id: up.id})
  }


  paginationDown() {
    let down = this.dataService.storage.getValue()
    if (down.pageId > 1) {
      down.pageId--
    }
    return this.dataService.storage.next({pageId: down.pageId, id: down.id})
  }
}

