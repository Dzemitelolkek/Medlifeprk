import { createReducer, on } from '@ngrx/store';
import { doctorsLoaded, DoctorsPayload } from '../actions/doctors.actions';
import { Doctor } from '../interfaces/doctor';

export const doctorsFeatureKey = 'doctors';

export const initialState: Doctor[] = [];

export const reducer = createReducer(
  initialState,
  on(
    doctorsLoaded,
    (state: Doctor[], action: DoctorsPayload) => action.data
  )
);
