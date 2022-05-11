import { BaseRouterStoreState } from '@ngrx/router-store';
import { Data, Params } from '@angular/router';

export interface RouterState extends BaseRouterStoreState {
    url: string;
    root: {
        params: Params;
        queryParams: Params;
        data: Data;
    }
}