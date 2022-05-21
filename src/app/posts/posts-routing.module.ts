import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostdetailsComponent} from "./posts-components/postdetails/postdetails.component";
import {PostsResolver} from "./post-services/posts.resolver";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
    resolve: {postsData: PostsResolver},
    children: [
      {path: ':id', component: PostdetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule]
})
export class PostsRoutingModule {
}
