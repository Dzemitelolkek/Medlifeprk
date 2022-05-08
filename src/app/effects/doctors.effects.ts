import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { filter, first, map, mergeMap } from "rxjs";
import { doctorsLoaded } from "../actions/doctors.actions";
import { State } from "../reducers";
import { configFeatureKey } from "../reducers/config.reducer";
import { DoctorsService } from "../services/doctors.service";

@Injectable()
export class DoctorsEffects {
    getDoctors$ = createEffect(() => {
        return this._actions$.pipe(
            ofType('[App] Init app'),
            mergeMap(() => this._store$.select(configFeatureKey).pipe(
              filter(val => Boolean(val)),
              first(),
              mergeMap(() => this.doctorsService.getDoctors()),
              map(his => doctorsLoaded({data: his.body}))
            ))
        );
    });

    constructor(private _actions$: Actions, private _store$: Store<State>, private doctorsService: DoctorsService) {}
}