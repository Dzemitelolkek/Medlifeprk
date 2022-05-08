import { createAction, props } from '@ngrx/store';
import { Carusel } from '../interfaces/carusel';

export interface LoadCaruselPayload {
  data: Carusel[]
}

export const caruselLoaded = createAction(
  '[Carusel] Carusel loaded',
  props<LoadCaruselPayload>()
);
