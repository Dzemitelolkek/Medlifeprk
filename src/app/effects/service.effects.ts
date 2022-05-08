import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, filter, mergeMap, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { configFeatureKey } from '../reducers/config.reducer';
import { ServiceService } from '../services/services.service';
import { servicesLoaded } from '../actions/services.actions';


@Injectable()
export class ServiceEffects {

  loadService$ = createEffect(() => {
    return this._actions$.pipe(
      ofType('[App] Init app'),
      mergeMap(() => this._store.select(configFeatureKey).pipe(
        filter(val => Boolean(val)),
        first(),
        mergeMap(() => this.serviceService.getServices()),
        map(serCat => servicesLoaded(serCat.body))
      ))
    );
  });

  constructor(private _actions$: Actions, private _store: Store<State>, private serviceService: ServiceService) { }
}
