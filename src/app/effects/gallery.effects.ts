import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { filter, first, map, mergeMap } from "rxjs";
import { galleryLoaded } from "../actions/gallery.actions";
import { State } from "../reducers";
import { configFeatureKey } from "../reducers/config.reducer";
import { GalleryService } from "../services/gallery.service";

@Injectable()
export class GalleryEffects {
    getGallery$ = createEffect(() => {
        return this._actions$.pipe(
            ofType('[App] Init app'),
            mergeMap(() => this._store$.select(configFeatureKey).pipe(
              filter(val => Boolean(val)),
              first(),
              mergeMap(() => this.galleryService.getGalery()),
              map(res => galleryLoaded({data: res.body?.data?.attributes?.images?.data}))
            ))
        );
    });

    constructor(private _actions$: Actions, private _store$: Store<State>, private galleryService: GalleryService) {}
}