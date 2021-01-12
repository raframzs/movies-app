import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Movie, NowPlayingResponse} from '../interfaces/nowPlayingResponse';
import {catchError, map, tap} from 'rxjs/operators';
import {MovieDetail} from '../interfaces/movie-detail';
import {Cast, CreditsResponse} from '../interfaces/credits-response';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseURL = 'https://api.themoviedb.org/3';
  private posterPage = 1;
  public loading: boolean;

  constructor(private httpClient: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  get params() {
    return {
      api_key: '32e5713a0414b8fd52b1ce4efb6043c1',
      language: 'es-ES',
      page: this.posterPage.toString()
    };
  }

  getMovies(): Observable<Movie[]> {

    if (this.loading) {
      return of([]);
    } // transform an observable

    this.loading = true;

    return this.httpClient.get<NowPlayingResponse>(`${this.baseURL}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map((resp) => resp.results),
      tap(() => {
        this.posterPage += 1;
        this.loading = false;
      }));
  }

  searchMovie(value: string): Observable<Movie[]> {
    const params = {...this.params, page: '1', query: value};

    // https://api.themoviedb.org/3/search/movie?
    return this.httpClient.get<NowPlayingResponse>(`${this.baseURL}/search/movie`, {
      params
    }).pipe(
      map(resp => resp.results)
    );
  }

  resetPage(): void {
    this.posterPage = 1;
  }

  getMovieDetail(id: string): Observable<MovieDetail> {
    //  https://api.themoviedb.org/3/movie/671039?api_key=32e5713a0414b8fd52b1ce4efb6043c1&language=es-ES
    return this.httpClient.get<MovieDetail>(`${this.baseURL}/movie/${id}`,
      {params: this.params}).pipe(
      catchError(err => of(null))
    );
  }

  getCredits(id: string): Observable<Cast[]> {
    //  https://api.themoviedb.org/3/movie/550/credits?api_key=32e5713a0414b8fd52b1ce4efb6043c1&language=en-US
    return this.httpClient.get<CreditsResponse>(`${this.baseURL}/movie/${id}/credits`,
      {params: this.params}).pipe(
      catchError(err => of([])),
      map((resp: any) => resp.cast));
  }


}
