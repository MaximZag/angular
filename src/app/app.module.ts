import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/user/user.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/post/post.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comment/comment.component';
import {HomeComponent} from './components/home/home.component';
import {UserdetailsComponent} from './components/userdetails/userdetails.component';
import {PostdetailsComponent} from './components/postdetails/postdetails.component';
import {CommentdetailsComponent} from './components/commentdetails/commentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent,
    HomeComponent,
    UserdetailsComponent,
    PostdetailsComponent,
    CommentdetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {
        path: 'allusers', component: UsersComponent,
        children: [
          {path: 'userdetails/:id', component: UserdetailsComponent}
        ]
      },
      {
        path: 'allposts', component: PostsComponent,
        children: [
          {path: 'postdetails/:id', component: PostdetailsComponent}
        ]
      },
      {
        path: 'allcomments', component: CommentsComponent,
        children: [
          {path: 'commentdetails/:id', component: CommentdetailsComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
