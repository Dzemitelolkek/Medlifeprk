import { createReducer, on } from '@ngrx/store';
import { licensesLoaded, LicensesPayload } from '../actions/licenses.actions';
import { Licenses } from '../interfaces/licenses';

export const licensesFeatureKey = 'licenses';

export const initialState: Licenses[] = null;

export const reducer = createReducer(
  initialState,
  on(
    licensesLoaded,
    (state: Licenses[], action: LicensesPayload) => action.data
  )
);
