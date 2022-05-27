import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, filter, mergeMap, first, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { configFeatureKey } from '../reducers/config.reducer';
import { GeneralInfoService } from '../services/general-info.service';
import { generalInfoLoaded } from '../actions/general-info.actions';
import { AnaliticService } from '../services/analitic.service';


@Injectable()
export class GeneralInfoEffects {

  loadGeneralInfo$ = createEffect(() => {
    return this._actions$.pipe(
      ofType('[App] Init app'),
      mergeMap(() => this._store.select(configFeatureKey).pipe(
        filter(val => Boolean(val)),
        first(),
        mergeMap(() => this.analiticService.incrementView().pipe(
          mergeMap(() => this.generalInfoService.getGeneralInfo()),
          map(info => generalInfoLoaded(info.body)),
        ))
      ))
    );
  });

  constructor(
    private _actions$: Actions,
    private _store: Store<State>,
    private generalInfoService: GeneralInfoService,
    private analiticService: AnaliticService,
  ) { }
}
