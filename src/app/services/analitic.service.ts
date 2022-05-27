import { Injectable } from '@angular/core';
import { first, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { configFeatureKey } from '../reducers/config.reducer';
import { CrudService } from './crud.service';
import { _getCrudService } from '../util/crud-service-getter';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AnaliticService {

  protected _crudService: CrudService<any>;

  incrementView() {
    return this._crudService.put({data: 123});
  }

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _store: Store<State>
  ) {
    this._store.pipe(
        select(configFeatureKey),
        filter((val) => Boolean(val)),
        first()
    ).subscribe((config) => {
        this._crudService = _getCrudService(
            '/analitic',
            config.BACKEND_CONTEXT,
            this._http,
            this._router,
        );
    });
  }
}
