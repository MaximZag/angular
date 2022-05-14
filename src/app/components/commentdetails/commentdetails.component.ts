import { Component, OnInit } from '@angular/core';
import {IComment} from "../../interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-commentdetails',
  templateUrl: './commentdetails.component.html',
  styleUrls: ['./commentdetails.component.css']
})
export class CommentdetailsComponent implements OnInit {

  commentdet:IComment

  constructor(private activatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(value => {
    let {state:{data}}=history;
    this.commentdet=data;
  })
  }

}
