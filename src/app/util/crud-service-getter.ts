import { CrudService } from './../services/crud.service';

export function _getCrudService<T>(
    path: string,
    context: string,
    http,
    router,
): CrudService<T> {
    return new (class extends CrudService<T> {
        constructor() {
            super(http, router);
            this._path_ = path;
            this._context_ = context;
        }
    })();
}