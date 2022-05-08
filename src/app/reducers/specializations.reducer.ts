import { createReducer, on } from '@ngrx/store';
import { specializationsLoaded, SpecializationsPayload } from '../actions/specializations.actions';
import { Specialization } from '../interfaces/specialization';

export const specializationsFeatureKey = 'specializations';

export const initialState: Specialization[] = [];

export const reducer = createReducer(
  initialState,
  on(
    specializationsLoaded,
    (state: Specialization[], action: SpecializationsPayload) => action.data
  )
);
