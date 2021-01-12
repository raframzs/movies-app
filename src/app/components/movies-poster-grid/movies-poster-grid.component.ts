import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../interfaces/nowPlayingResponse';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {

  @Input() movies: Movie[];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToMovie(movie: Movie): void {
    this.router.navigate(['/movie', movie.id]);
  }
}
