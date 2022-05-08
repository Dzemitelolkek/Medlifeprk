import { createAction, props } from '@ngrx/store';
import { Config } from '../interfaces/config';

export interface LoadConfigPayload {
  config: Config;
}

export const configLoaded = createAction(
  '[Config] Config loaded',
  props<LoadConfigPayload>()
);
