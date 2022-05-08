import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, filter } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { State } from '../reducers';
import { configFeatureKey } from '../reducers/config.reducer';
import { CrudService } from './crud.service';
import { _getCrudService } from '../util/crud-service-getter';
import { Router } from '@angular/router';
import { CompanyHistory } from '../interfaces/company-history';

@Injectable({
  providedIn: 'root'
})
export class CompanyHistoryService {

  protected _crudService: CrudService<{data: CompanyHistory}>;

  getHistory(): Observable<HttpResponse<{data: CompanyHistory}>> {
    const params: HttpParams = new HttpParams({ fromObject: { populate: '*' } });

    return this._crudService.get({ params });
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
            '/company-history',
            config.BACKEND_CONTEXT,
            this._http,
            this._router,
        );
    });
  }
}
