import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../services/movies.service';
import {MovieDetail} from '../../interfaces/movie-detail';
import {Location} from '@angular/common';
import {Cast} from '../../interfaces/credits-response';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movie: MovieDetail;
  public cast: Cast[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;

    combineLatest([
      this.moviesService.getMovieDetail(id),
      this.moviesService.getCredits(id)
    ]).subscribe(([movie, cast]) => {

      /* Movie observable handler */
      if (!movie) {
        this.router.navigateByUrl('/home');
      }
      this.movie = movie;

      /* Cast observable handler*/
      this.cast = cast.filter(actor => actor.profile_path != null);
    });

  }

  goBack(): void {
    this.location.back();
  }
}
