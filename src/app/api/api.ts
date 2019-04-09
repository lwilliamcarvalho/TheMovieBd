import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

	private url = 'https://api.themoviedb.org/3';
  private translate = '&language=pt-BR';
  private region = '&region=US';
  constructor(public http: HttpClient) {}

  getTopMovies(){
    return this.http.get(
			this.url + `/movie/top_rated?&api_key=fbdcefe4ecfe89b46aa92004497bc9bd` + this.translate
		);
  }
  getMoviesDetails(filmeid){
    return this.http.get(
			this.url + `/movie/${filmeid}?api_key=fbdcefe4ecfe89b46aa92004497bc9bd` + this.translate
		);
  }
}
