import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ConfigService } from '../services/config.service';
import { configLoaded } from '../actions/config.actions';
import { mergeMapTo, map, filter, mergeMap, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { CaruselService } from '../services/carusel.service';
import { caruselLoaded } from '../actions/carusel.actions';
import { configFeatureKey } from '../reducers/config.reducer';


@Injectable()
export class CaruselEffects {

  loadCarusel$ = createEffect(() => {
    return this._actions$.pipe(
      ofType('[App] Init app'),
      mergeMap(() => this._store.select(configFeatureKey).pipe(
        filter(val => Boolean(val)),
        first(),
        mergeMap(() => this.caruselService.getCarusel()),
        map(carusel => caruselLoaded({data: carusel.body}))
      ))
    );
  });

  constructor(private _actions$: Actions, private _store: Store<State>, private caruselService: CaruselService) { }
}
