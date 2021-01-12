import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {Movie} from '../../interfaces/nowPlayingResponse';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies: Movie[] = [];
  public searchValue: string;

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MoviesService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((resp) => {
      this.searchValue = resp.text;
      this.movieService.searchMovie(resp.text).subscribe(movies => {
        this.movies = movies;
      });
    });
  }

  goBack(): void {
    this.location.back();
  }


}
