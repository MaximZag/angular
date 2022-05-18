import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {PostsComponent} from "./posts-components/posts/posts.component";
import {PostdetailsComponent} from "./posts-components/postdetails/postdetails.component";

const routes: Routes = [
  {
    path: '', component: PostsComponent,
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
