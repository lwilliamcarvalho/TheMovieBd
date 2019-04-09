import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieService } from './api/api';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { MovieComponent } from './movie/movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ListMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientJsonpModule
  ],
  providers: [
    MovieService,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
