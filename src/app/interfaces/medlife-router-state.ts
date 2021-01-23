import { BaseRouterStoreState } from '@ngrx/router-store';
import { Params } from '@angular/router';

export interface MedlifeRouterState extends BaseRouterStoreState {
    params: Params;
}
