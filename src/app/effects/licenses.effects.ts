import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, filter, mergeMap, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { configFeatureKey } from '../reducers/config.reducer';
import { LicensesService } from '../services/licenses.service';
import { licensesLoaded } from '../actions/licenses.actions';


@Injectable()
export class LicensesEffects {
  loadLicenses$ = createEffect(() => {
    return this._actions$.pipe(
      ofType('[App] Init app'),
      mergeMap(() => this._store.select(configFeatureKey).pipe(
        filter(val => Boolean(val)),
        first(),
        mergeMap(() => this.licensesService.getLicenses()),
        map(licenses => licensesLoaded(licenses.body))
      ))
    );
  });

  constructor(private _actions$: Actions, private _store: Store<State>, private licensesService: LicensesService) { }
}
