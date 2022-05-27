import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export class CrudService<T> {
    protected _path_: string;
    protected _context_: string;
    constructor(private _http: HttpClient, private _router: Router) {}

    get(attr: {
        id?: string,
        headers?: { [name: string]: string | string[] },
        params?: HttpParams
    }): Observable<HttpResponse<T>> {
        let processedHeaders = attr.headers || {};
        const _headers: HttpHeaders = new HttpHeaders(processedHeaders);

        let path = attr.id ? `${this._context_}/api${this._path_}/${attr.id}` : `${this._context_}/api${this._path_}`;

        try {
            return this._http
                .get<T>(path, {
                    observe: 'response',
                    responseType: 'json',
                    headers: _headers,
                    params: attr.params ?? null,
                });
        } catch (err) {
            throw new Error(`Can't get ${path}`);
        }
    }

    getList(attr: {
        headers?: { [name: string]: string | string[] },
        params?: HttpParams
    }): Observable<HttpResponse<T>> {
        try {
            return this._http
                .get<T>(this._context_ + '/api' + this._path_, {
                    observe: 'response',
                    responseType: 'json',
                    headers: attr.headers ?? {},
                    params: attr.params ?? null,
                });
        } catch (err) {
            throw new Error(`Can't get list ${this._path_}`);
        }
    }

    post(
        body: any,
        _headers?: { [name: string]: string | string[] },
        _params?: HttpParams,
    ): Observable<T> {
        try {
            return this._http
                .post<T>(this._context_ + '/api' + this._path_, body, {
                    headers: _headers,
                    params: _params,
                });
        } catch (err) {
            throw new Error(`Can't post ${this._path_}`);
        }
    }

    put(body: any, options = {}) {
        try {
            console.log(this._context_ + '/api' + this._path_, body);
            
            return this._http.put<T>(this._context_ + '/api' + this._path_, body, options);
        } catch (error) {
            throw new Error(`Can't PUT. Error: ${error}`);
        }
    }
}