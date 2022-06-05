import {Component, Input, OnInit} from '@angular/core';

import {Router} from "@angular/router";

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input()
  actor: any

  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  actorDetails() {
    this.router.navigate([`actor/${this.actor.id}`])
  }
}
