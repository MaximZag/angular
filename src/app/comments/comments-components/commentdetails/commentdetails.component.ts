import {Component, OnInit} from '@angular/core';
import {IComment} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-commentdetails',
  templateUrl: './commentdetails.component.html',
  styleUrls: ['./commentdetails.component.css']
})
export class CommentdetailsComponent implements OnInit {

  commentdet: IComment

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.commentdet = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;
    })
  }

  ngOnInit(): void {
  }

}
