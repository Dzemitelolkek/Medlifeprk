import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { select, Store } from "@ngrx/store";
import { filter, first, map, mergeMap } from "rxjs";
import { doctorsSpecServiceMapLoaded, SpecServiceMap } from "../actions/doctors-spec-service-map.actions";
import { doctorsLoaded } from "../actions/doctors.actions";
import { Service } from "../interfaces/service";
import { State } from "../reducers";
import { configFeatureKey } from "../reducers/config.reducer";
import { doctorsFeatureKey } from "../reducers/doctors.reducer";
import { serviceFeatureKey } from "../reducers/services.reducer";
import { specializationsFeatureKey } from "../reducers/specializations.reducer";
import { DoctorsService } from "../services/doctors.service";

@Injectable()
export class DoctorsSpecServiceMapEffects {
    getDoctorsSpecServiceMap$ = createEffect(() => {
        return this._actions$.pipe(
            ofType(ROUTER_NAVIGATION),
            filter((action: RouterNavigationAction) => {
                const url = this.getFullUrl(action.payload.routerState.url);
                return /\/specialist\/[0-9]+/.test(url.pathname);
            }),
            mergeMap(action => this._store$.select(configFeatureKey).pipe(
              filter(val => Boolean(val)),
              first(),
              mergeMap(() => this._store$.pipe(
                  select(specializationsFeatureKey),
                  filter(val => Boolean(val)),
                  first(),
                  mergeMap(specializations => this._store$.pipe(
                    select(doctorsFeatureKey),
                    filter(val => Boolean(val)),
                    first(),
                    map(doctors => {
                      const docId = action?.payload?.routerState.root.params.id;
                      const doc = doctors.find(doc => doc.id === parseInt(docId));
                      const docSpecs = doc.attributes.specializations.data;
                      const specServiceMap: SpecServiceMap = {};
                      docSpecs.forEach(docSpec => {
                          specServiceMap[docSpec.attributes.name] = specializations.find(s => s.id === docSpec.id).attributes.services.data;
                      });

                      return doctorsSpecServiceMapLoaded({data: specServiceMap});
                    })
                  ))
              )),
            ))
        );
    });

    constructor(private _actions$: Actions, private _store$: Store<State>, private doctorsService: DoctorsService) {}
    
    private getFullUrl(urlPart: string): URL {
        return new URL(window.location.protocol + window.location.hostname + urlPart);
    }
}