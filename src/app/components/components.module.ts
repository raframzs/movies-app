import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import {SlideShowComponent} from './slide-show/slide-show.component';
import {MoviesPosterGridComponent} from './movies-poster-grid/movies-poster-grid.component';
import {RatingModule} from 'ng-starrating';
import {PipesModule} from '../pipes/pipes.module';
import {CastSlideshowComponent} from './cast-slideshow/cast-slideshow.component';


@NgModule({
  declarations: [
    NavbarComponent,
    SlideShowComponent,
    MoviesPosterGridComponent,
    CastSlideshowComponent
  ],
  exports: [
    NavbarComponent,
    SlideShowComponent,
    MoviesPosterGridComponent,
    CastSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule
  ]
})
export class ComponentsModule {
}

