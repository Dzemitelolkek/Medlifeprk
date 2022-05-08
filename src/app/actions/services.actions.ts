import { createAction, props } from '@ngrx/store';
import { Service } from '../interfaces/service';

export interface ServicesPayload {
  data: Service[]
}

export const servicesLoaded = createAction(
  '[Services] Services loaded',
  props<ServicesPayload>()
);
