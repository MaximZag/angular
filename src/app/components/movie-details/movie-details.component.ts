import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

// import {IMovie} from "../../interfaces";
import {MovieService} from "../../services";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private dataService:DataService, private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => this.movieService.getOneMovie(id).subscribe(value => this.movie = value))
  }

  back() {
    this.dataService.storage.next({pageId: 1, id: ''})
    this.dataService.name.next('All Movies')
    this.router.navigate(['/movies'])
  }
}
