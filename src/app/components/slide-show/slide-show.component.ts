import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../interfaces/nowPlayingResponse';
import Swiper from 'swiper';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {

  @Input() movies: Movie[];
  public swiper: Swiper;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
    });
  }


  ngOnInit(): void {
  }

  swipePrev(): void {
    this.swiper.slidePrev();
  }

  swipeNext(): void {
    this.swiper.slideNext();
  }
}
