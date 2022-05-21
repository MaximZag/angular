import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./post-services/post.service";
import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostComponent} from "./posts-components/post/post.component";
import {PostdetailsComponent} from "./posts-components/postdetails/postdetails.component";
import {PostsResolver} from "./post-services/posts.resolver";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostdetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostService,
    PostsResolver
  ]
})
export class PostsModule { }
