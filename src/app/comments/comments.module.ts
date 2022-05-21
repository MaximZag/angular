import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentService} from "./comment-services/comment.service";
import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentComponent} from "./comments-components/comment/comment.component";
import {CommentdetailsComponent} from "./comments-components/commentdetails/commentdetails.component";
import {CommentsResolver} from "./comment-services/comments.resolver";


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
  providers: [
    CommentService,
    CommentsResolver
  ]
})
export class CommentsModule {
}
