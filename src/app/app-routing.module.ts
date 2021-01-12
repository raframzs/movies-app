import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MovieComponent} from './pages/movie/movie.component';
import {SearchComponent} from './pages/search/search.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'search/:text', component: SearchComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}