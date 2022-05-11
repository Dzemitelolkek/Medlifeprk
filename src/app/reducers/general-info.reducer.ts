import { createReducer, on } from '@ngrx/store';
import { generalInfoLoaded, GeneralInfoPayload } from '../actions/general-info.actions';
import { GeneralInfo } from '../interfaces/generalInfo';

export const generalInfoFeatureKey = 'generalInfo';

export const initialState: GeneralInfo = null;

export const reducer = createReducer(
  initialState,
  on(
    generalInfoLoaded,
    (state: GeneralInfo, action: GeneralInfoPayload) => action.data
  )
);
