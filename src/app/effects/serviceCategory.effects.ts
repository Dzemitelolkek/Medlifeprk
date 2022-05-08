import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, filter, mergeMap, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { configFeatureKey } from '../reducers/config.reducer';
import { ServiceCategoryService } from '../services/service-category.service';
import { serviceCategoryLoaded } from '../actions/serviceCategory.actions';


@Injectable()
export class ServiceCategoryEffects {

  loadServiceCategory$ = createEffect(() => {
    return this._actions$.pipe(
      ofType('[App] Init app'),
      mergeMap(() => this._store.select(configFeatureKey).pipe(
        filter(val => Boolean(val)),
        first(),
        mergeMap(() => this.serviceCategoryService.getServiceCategories()),
        map(serCat => serviceCategoryLoaded(serCat.body))
      ))
    );
  });

  constructor(private _actions$: Actions, private _store: Store<State>, private serviceCategoryService: ServiceCategoryService) { }
}
