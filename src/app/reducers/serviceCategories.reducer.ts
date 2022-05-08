import { createReducer, on } from '@ngrx/store';
import { serviceCategoryLoaded, ServiceCategoriesPayload } from '../actions/serviceCategory.actions';
import { ServiceCategory } from '../interfaces/service-categories';

export const serviceCategoriesFeatureKey = 'serviceCategories';

export const initialState: ServiceCategory[] = [];

export const reducer = createReducer(
  initialState,
  on(
    serviceCategoryLoaded,
    (state: ServiceCategory[], action: ServiceCategoriesPayload) => action.data
  )
);
