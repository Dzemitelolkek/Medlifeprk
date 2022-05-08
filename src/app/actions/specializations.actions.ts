import { createAction, props } from '@ngrx/store';
import { Specialization } from '../interfaces/specialization';

export interface SpecializationsPayload {
  data: Specialization[]
}

export const specializationsLoaded = createAction(
  '[Specializations] Specializations loaded',
  props<SpecializationsPayload>()
);
