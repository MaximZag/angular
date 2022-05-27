import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import { GenresComponent } from './components/genres/genres.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { GenreComponent } from './components/genre/genre.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    MoviesComponent,
    MovieComponent,
    GenreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      // {path: '', component: HomeComponent},
      {
        path: 'movies', component: MoviesComponent,
        // children: [
        //   {path: 'userdetails/:id', component: UserdetailsComponent}
        // ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
