import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {IMovie} from "../../interfaces";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-last8',
  templateUrl: './last8.component.html',
  styleUrls: ['./last8.component.css']
})
export class Last8Component implements OnInit {

  @Input()
  movie: IMovie

  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  getDetails() {
    let lastseen = this.dataService.last.value;
    if (lastseen.length < 1) {
      lastseen.push(this.movie);
    } else{
      lastseen=lastseen.filter(item=>item.id !== this.movie.id)
      lastseen.push(this.movie);
    }
    if(lastseen.length>8){
      lastseen.shift()
    }
    this.dataService.last.next(lastseen);
    this.router.navigate([`movies/${this.movie.id}`])
  }
}
