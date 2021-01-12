import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {Movie, NowPlayingResponse} from '../../interfaces/nowPlayingResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      // TODO call service
      if (this.moviesService.loading) {
        return;
      }
      this.moviesService.getMovies().subscribe(movies => {
        this.movies.push(...movies);
      });
    }

  }

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.moviesSlideShow = movies;
    });
  }

  ngOnDestroy(): void {
    this.moviesService.resetPage();
  }

}
