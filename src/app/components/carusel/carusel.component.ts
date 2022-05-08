import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Carusel } from 'src/app/interfaces/carusel';
import { filter, first, Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { mainCaruselFeatureKey } from 'src/app/reducers/carusel.reducer';
import { Config } from 'src/app/interfaces/config';
import { configFeatureKey } from 'src/app/reducers/config.reducer';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CaruselComponent implements OnInit {
  caruselData$: Observable<Carusel[]>;
  config$: Observable<Config>;

  constructor(private _store: Store<State>) {
    this.caruselData$ = this._store.pipe(
      select(mainCaruselFeatureKey),
      filter(val => Boolean(val)),
      first()
    );

    this.config$ = this._store.pipe(
      select(configFeatureKey),
      filter(val => Boolean(val)),
      first()
    );
  }

  ngOnInit() {
  }

}
