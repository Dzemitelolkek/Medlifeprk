import { createAction, props } from '@ngrx/store';
import { GeneralInfo } from '../interfaces/generalInfo';

export interface GeneralInfoPayload {
  data: GeneralInfo
}

export const generalInfoLoaded = createAction(
  '[GeneralInfo] General info loaded',
  props<GeneralInfoPayload>()
);
