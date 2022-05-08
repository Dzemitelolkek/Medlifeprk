import { createReducer, on } from '@ngrx/store';
import { caruselLoaded, LoadCaruselPayload } from '../actions/carusel.actions';
import { Carusel } from '../interfaces/carusel';

export const mainCaruselFeatureKey = 'mainCarusel';

export const initialState: Carusel[] = null;

export const reducer = createReducer(
  initialState,
  on(
    caruselLoaded,
    (state: Carusel[], action: LoadCaruselPayload) => action.data
  )
);
