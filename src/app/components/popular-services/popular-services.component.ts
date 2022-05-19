import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
import { State } from 'src/app/reducers';
import { select, Store } from '@ngrx/store';
import { filter, first, map, Observable } from 'rxjs';
import { Config } from 'src/app/interfaces/config';
import { configFeatureKey } from 'src/app/reducers/config.reducer';
import { ServiceCategory } from 'src/app/interfaces/service-categories';
import { serviceCategoriesFeatureKey } from 'src/app/reducers/serviceCategories.reducer';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);


@Component({
  selector: 'app-popular-services',
  templateUrl: './popular-services.component.html',
  styleUrls: ['./popular-services.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PopularServicesComponent {
  config$: Observable<Config>;
  serviceCategories$: Observable<ServiceCategory[]>

  constructor(private store$: Store<State>) {
    this.config$ = this.store$.pipe(
      select(configFeatureKey),
      filter(val => Boolean(val)),
      first()
    );
    this.serviceCategories$ = this.store$.pipe(
      select(serviceCategoriesFeatureKey),
      filter(catigories => Boolean(catigories)),
      map(catigories => {
        return catigories.filter(cat => cat.attributes.favorite);
      })
    );
  }

  getSerCatPhotoUrl(serCat) {
    const formats = serCat?.attributes?.categoryPhoto?.data?.attributes?.formats;
    return formats?.medium?.url || formats?.small?.url;
  }
  getServiceUrl(serviceCat: ServiceCategory): string {
    return `/service/${serviceCat.id}`;
  }
}
