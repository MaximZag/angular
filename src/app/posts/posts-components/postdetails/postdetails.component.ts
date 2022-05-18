import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost} from "../../../interfaces";

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {

  postdet: IPost

  constructor(private activatedRoute: ActivatedRoute, private router:Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      this.postdet = this.router.getCurrentNavigation()?.extras?.state?.['post'] as IPost
    })
  }

}
