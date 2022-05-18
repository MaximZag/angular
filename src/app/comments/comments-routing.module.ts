import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommentsComponent} from "./comments-components/comments/comments.component";
import {CommentdetailsComponent} from "./comments-components/commentdetails/commentdetails.component";

const routes: Routes = [
  {path:'',component:CommentsComponent,
    children:[
      {path:':id',component:CommentdetailsComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
