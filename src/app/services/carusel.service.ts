import { Injectable, Inject } from '@angular/core';
import { Observable, Observer, throwError} from 'rxjs';
import { tap, first, catchError, filter } from 'rxjs/operators';
import { Config } from '../interfaces/config';
import { HttpClient, HttpParams, HttpParamsOptions, HttpResponse } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { configFeatureKey } from '../reducers/config.reducer';
import { CrudService } from './crud.service';
import { _getCrudService } from '../util/crud-service-getter';
import { Router } from '@angular/router';
import { Carusel } from '../interfaces/carusel';

@Injectable({
  providedIn: 'root'
})
export class CaruselService {

  protected _crudService: CrudService<Carusel[]>;

  getCarusel(): Observable<HttpResponse<Carusel[]>> {
    const params: HttpParams = new HttpParams({ fromObject: { populate: '*' } });

    return this._crudService.getList({ params });
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
            '/main-carusels-plural-id',
            config.BACKEND_CONTEXT,
            this._http,
            this._router,
        );
    });
  }
}
