import { Action, createReducer, on } from '@ngrx/store';
import { elementsLoaded, ElementsPayload, Element } from '../actions/menu.actions';

export const menuElementsFeatureKey = 'menuElements';

export const initialState = [];


export const reducer = createReducer(
  initialState,
  on(
    elementsLoaded,
    (state: Array<Element>, action: ElementsPayload) => action.elements
  )
);

