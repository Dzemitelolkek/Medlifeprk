import { createAction, props } from '@ngrx/store';
import { Doctor } from '../interfaces/doctor';

export interface DoctorsPayload {
  data: Doctor[]
}

export const doctorsLoaded = createAction(
  '[Doctors] Doctors loaded',
  props<DoctorsPayload>()
);
