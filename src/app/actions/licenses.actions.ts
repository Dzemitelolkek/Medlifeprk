import { createAction, props } from '@ngrx/store';
import { Licenses } from '../interfaces/licenses';

export interface LicensesPayload {
  data: Licenses[]
}

export const licensesLoaded = createAction(
  '[Licenses] Licenses loaded',
  props<LicensesPayload>()
);
