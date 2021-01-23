import { createAction, props } from '@ngrx/store';

export enum MenuActionTypes {
  SetCurrent = '[Menu] Set currrent',
  LoadElements = '[Menu] Load elements',
  elementsLoaded = '[Menu] Elements loaded',
}

export interface CurrentPayload {
  current: number;
}

export interface ElementsPayload {
  elements: Array<Element>;
}

export interface Element {
  name: string;
  path: string;
}

export const setCurrent = createAction(
  MenuActionTypes.SetCurrent,
  props<CurrentPayload>()
);

export const loadElements = createAction(
  MenuActionTypes.LoadElements
);

export const elementsLoaded = createAction(
  MenuActionTypes.elementsLoaded,
  props<ElementsPayload>()
);
