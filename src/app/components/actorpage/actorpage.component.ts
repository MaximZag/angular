import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

// import {IActor} from "../../interfaces/actor.interface";
import {MovieService} from "../../services";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-actorpage',
  templateUrl: './actorpage.component.html',
  styleUrls: ['./actorpage.component.css']
})
export class ActorpageComponent implements OnInit {

  actor:any

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private dataService:DataService, private router:Router) {
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(({id}) => this.movieService.getOneActor(id).subscribe(value => this.actor=value))
  }

  back() {
    this.dataService.storage.next({pageId: 1, id: ''})
    this.dataService.name.next('All Movies')
    this.router.navigate(['/movies'])
  }
}
