import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, filter, mergeMap, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { configFeatureKey } from '../reducers/config.reducer';
import { InsuranceCompaniesService } from '../services/insurance-companies.service';
import { insuranceCompaniesLoaded } from '../actions/insurance-companies.actions';


@Injectable()
export class InsuranceCompaniesEffects {

  loadInsuranceCompanies$ = createEffect(() => {
    return this._actions$.pipe(
      ofType('[App] Init app'),
      mergeMap(() => this._store.select(configFeatureKey).pipe(
        filter(val => Boolean(val)),
        first(),
        mergeMap(() => this.insuranceCompaniesService.getInsuranceCompanies()),
        map(insComp => insuranceCompaniesLoaded(insComp.body))
      ))
    );
  });

  constructor(private _actions$: Actions, private _store: Store<State>, private insuranceCompaniesService: InsuranceCompaniesService) { }
}
