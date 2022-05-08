import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, first, Observable } from 'rxjs';
import { Config } from 'src/app/interfaces/config';
import { ServiceCategory } from 'src/app/interfaces/service-categories';
import { State } from 'src/app/reducers';
import { configFeatureKey } from 'src/app/reducers/config.reducer';
import { serviceCategoriesFeatureKey } from 'src/app/reducers/serviceCategories.reducer';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  serviceCategories$: Observable<ServiceCategory[]>;
  config$: Observable<Config>;

  constructor(
    private store$: Store<State>
  ) {
    this.serviceCategories$ = this.store$.pipe(
      select(serviceCategoriesFeatureKey),
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

  getSerCatPhotoUrl(config: Config, serCat: ServiceCategory): string {
    return `url(${config.BACKEND_CONTEXT}${serCat?.attributes?.categoryPhoto?.data?.attributes?.formats?.small?.url})`;
  }
}
