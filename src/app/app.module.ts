import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {GenresComponent} from './components/genres/genres.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movie/movie.component';
import {GenreComponent} from './components/genre/genre.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {ReactiveFormsModule} from "@angular/forms";
import { Last8Component } from './components/last8/last8.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenresComponent,
    MoviesComponent,
    MovieComponent,
    GenreComponent,
    MovieDetailsComponent,
    Last8Component
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent},
            {path: 'movies', component: MoviesComponent},
            {path: 'movies/:id', component: MovieDetailsComponent}
        ]),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
