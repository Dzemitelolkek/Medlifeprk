import { createReducer, on } from '@ngrx/store';
import { servicesLoaded, ServicesPayload } from '../actions/services.actions';
import { Service } from '../interfaces/service';

export const serviceFeatureKey = 'services';

export const initialState: Service[] = null;

export const reducer = createReducer(
  initialState,
  on(
    servicesLoaded,
    (state: Service[], action: ServicesPayload) => action.data
  )
);
