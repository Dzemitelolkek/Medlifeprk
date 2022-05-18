import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Config } from 'protractor';
import { filter, first, Observable, Subscription } from 'rxjs';
import { ServiceCategory } from 'src/app/interfaces/service-categories';
import { State } from 'src/app/reducers';
import { configFeatureKey } from 'src/app/reducers/config.reducer';
import { serviceCategoriesFeatureKey } from 'src/app/reducers/serviceCategories.reducer';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  serviceCategories$: Observable<ServiceCategory[]>;
  config$: Observable<Config>;

  serviceCatId: string;
  serviceCategory: ServiceCategory;
  subs: Subscription[] = [];

  constructor(
    private store$: Store<State>,
    private route: ActivatedRoute
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
    this.subs.push(
      this.route.params.subscribe(params => { this.serviceCatId = params['id']; }),
      this.serviceCategories$.subscribe(catigories => { this.serviceCategory = catigories.find(c => c.id === parseInt(this.serviceCatId)) })
    );
  }

}
