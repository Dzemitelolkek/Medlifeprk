import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, first, Observable } from 'rxjs';
import { CompanyHistory } from 'src/app/interfaces/company-history';
import { Config } from 'src/app/interfaces/config';
import { Licenses } from 'src/app/interfaces/licenses';
import { State } from 'src/app/reducers';
import { companyHistoryFeatureKey } from 'src/app/reducers/company-history.reducer';
import { configFeatureKey } from 'src/app/reducers/config.reducer';
import { licensesFeatureKey } from 'src/app/reducers/licenses.reducer';

import { SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Formats, MyImageData } from 'src/app/interfaces/image-data';
import { galleryFeatureKey } from 'src/app/reducers/gallery.reducer';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {
  history$: Observable<CompanyHistory>;
  config$: Observable<Config>;
  licenses$: Observable<Licenses[]>;
  gallery$: Observable<MyImageData[]>;

  thumbsSwiper: any;

  constructor(private store$: Store<State>) {
    this.history$ = this.store$.pipe(
      select(companyHistoryFeatureKey),
      filter(val => Boolean(val))
    );
    this.licenses$ = this.store$.pipe(
      select(licensesFeatureKey),
      filter(val => Boolean(val))
    );
    this.gallery$ = this.store$.pipe(
      select(galleryFeatureKey),
      filter(val => Boolean(val))
    );
    this.config$ = this.store$.pipe(
      select(configFeatureKey),
      filter(val => Boolean(val)),
      first()
    );
  }

  ngOnInit() {
  }

  getLicensePhotoUrl(config: Config, license: Licenses) {
    return `url(${config.BACKEND_CONTEXT}${license?.attributes?.photo?.data?.attributes?.formats?.small?.url})`;
  }

  getGalleryImgUrl(formats: Formats, config: Config): string {
    return `${config.BACKEND_CONTEXT}${formats?.large?.url || formats?.medium?.url || formats?.small?.url}`;
  }
}
