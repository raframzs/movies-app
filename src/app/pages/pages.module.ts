import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {MovieComponent} from './movie/movie.component';
import {ComponentsModule} from '../components/components.module';
import {PipesModule} from '../pipes/pipes.module';
import {RatingModule} from 'ng-starrating';


@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule,
    RatingModule,
    /*With dis we can fetch all components */
  ]
})
export class PagesModule {
}
