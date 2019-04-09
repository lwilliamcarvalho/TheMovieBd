import { Component, OnInit } from '@angular/core';
import { MovieService } from '../api/api';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
 
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css'],
  providers:[
 	MovieService
 	]
})
export class ListMovieComponent implements OnInit {
  public selectedId: number;
  public list_movie: any = [];
  public page = 1;
  public query: string;

  constructor(
 		private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) {
 	}

  getMovies(){
    this.movieService.getTopMovies().subscribe(data => {
      const obj = data;
      
      this.list_movie = obj;

    })
  }
  search(){
    if(this.query) {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=fbdcefe4ecfe89b46aa92004497bc9bd&language=pt-BR&page=1&include_adult=false&query=${encodeURIComponent(this.query)}`;
      return this.http.get(url).subscribe(res=>{
          this.list_movie = res;
      });
    }
	}
  movieDetails(movie){
    this.router.navigate(['/movie', movie.id])
 	}
  ngOnInit() {
    this.getMovies();
  }

}
