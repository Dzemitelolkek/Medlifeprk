import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { filter, first, map, mergeMap } from "rxjs";
import { companyHistoryLoaded } from "../actions/company-history.actions";
import { State } from "../reducers";
import { configFeatureKey } from "../reducers/config.reducer";
import { CompanyHistoryService } from "../services/company-history.service";

@Injectable()
export class CompanyHistoryEffects {
    getCompanyHistory$ = createEffect(() => {
        return this._actions$.pipe(
            ofType('[App] Init app'),
            mergeMap(() => this._store$.select(configFeatureKey).pipe(
              filter(val => Boolean(val)),
              first(),
              mergeMap(() => this.companyHistoryService.getHistory()),
              map(his => companyHistoryLoaded(his.body))
            ))
        );
    });

    constructor(private _actions$: Actions, private _store$: Store<State>, private companyHistoryService: CompanyHistoryService) {}
}