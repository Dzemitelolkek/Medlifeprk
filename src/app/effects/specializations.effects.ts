import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, filter, mergeMap, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { configFeatureKey } from '../reducers/config.reducer';
import { SpecializationsService } from '../services/specializations.service';
import { specializationsLoaded } from '../actions/specializations.actions';


@Injectable()
export class SpecializationsEffects {

  loadSpecializations$ = createEffect(() => {
    return this._actions$.pipe(
      ofType('[App] Init app'),
      mergeMap(() => this._store.select(configFeatureKey).pipe(
        filter(val => Boolean(val)),
        first(),
        mergeMap(() => this.specializationsService.getSpecializations()),
        map(specializations => specializationsLoaded(specializations.body))
      ))
    );
  });

  constructor(private _actions$: Actions, private _store: Store<State>, private specializationsService: SpecializationsService) { }
}
