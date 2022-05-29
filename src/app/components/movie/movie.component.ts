import {Component, Input, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  movie:IMovie

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getDetails() {
    this.router.navigate([`movies/${this.movie.id}`])
  }
}
