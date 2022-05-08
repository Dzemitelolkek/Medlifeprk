import { createAction, props } from '@ngrx/store';
import { InsuranceCompanies } from '../interfaces/InsuranceCompanies';

export interface InsuranceCompaniesPayload {
  data: InsuranceCompanies
}

export const insuranceCompaniesLoaded = createAction(
  '[InsuranceCompanies] Insurance companies loaded',
  props<InsuranceCompaniesPayload>()
);
