import { createReducer, on } from '@ngrx/store';
import { setCurrent, CurrentPayload } from '../actions/menu.actions';

export const currentPageFeatureKey = 'currentPage';

export const initialState = 0;


export const reducer = createReducer(
  initialState,
  on(
    setCurrent,
    (state: number, action: CurrentPayload) => action.current
  )
);

