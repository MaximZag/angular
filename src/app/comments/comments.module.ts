import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "./comment-services/comment.service";
import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentComponent} from "./comments-components/comment/comment.component";
import {CommentdetailsComponent} from "./comments-components/commentdetails/commentdetails.component";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentdetailsComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers:[
    CommentService
  ]
})
export class CommentsModule { }
