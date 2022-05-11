import { createAction, props } from '@ngrx/store';
import { Service } from '../interfaces/service';

export interface DoctorsSpecServiceMapPayload {
  data: SpecServiceMap
}
export interface SpecServiceMap {
  [key: string]: Service[]
}

export const doctorsSpecServiceMapLoaded = createAction(
  '[DoctorsSpecServiceMap] Doctors spec service map loaded',
  props<DoctorsSpecServiceMapPayload>()
);

export const clearDoctorsSpecServiceMap = createAction(
  '[DoctorsSpecServiceMap] Clear doctors spec service map'
);
