import {Component, OnInit} from '@angular/core';
// import {IMovie} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";
import {MovieService} from "../../services";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.movieService.getOneMovie(id).subscribe(value => this.movie = value))
  }

}
