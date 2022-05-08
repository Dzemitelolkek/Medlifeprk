import { createAction, props } from '@ngrx/store';
import { ServiceCategory } from '../interfaces/service-categories';

export interface ServiceCategoriesPayload {
  data: ServiceCategory[]
}

export const serviceCategoryLoaded = createAction(
  '[Service category] Service category loaded',
  props<ServiceCategoriesPayload>()
);
