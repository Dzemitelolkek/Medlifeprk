import { createReducer, on } from '@ngrx/store';
import { clearDoctorsSpecServiceMap, doctorsSpecServiceMapLoaded, DoctorsSpecServiceMapPayload, SpecServiceMap } from '../actions/doctors-spec-service-map.actions';
import { Service } from '../interfaces/service';

export const doctorsSpecServiceMapFeatureKey = 'doctorsSpecServiceMap';

export const initialState: SpecServiceMap = null;

export const reducer = createReducer(
  initialState,
  on(
    doctorsSpecServiceMapLoaded,
    (state: SpecServiceMap, action: DoctorsSpecServiceMapPayload) => action.data
  ),
  on(
    clearDoctorsSpecServiceMap,
    (_, __) => initialState
  )
);
