import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import  { ActivatedRoute } from '@angular/router';
import { MovieService } from '../api/api';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movieId: any;
  public movieDetails;

  constructor(private route: ActivatedRoute,
              private movieService: MovieService) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.params['id'];
    this.movieService.getMoviesDetails(this.movieId).subscribe(data => {
      const obj = data;
      this.movieDetails = obj;
    })
  }

}
