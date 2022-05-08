import { createReducer, on } from '@ngrx/store';
import { insuranceCompaniesLoaded, InsuranceCompaniesPayload } from '../actions/insurance-companies.actions';
import { specializationsLoaded, SpecializationsPayload } from '../actions/specializations.actions';
import { InsuranceCompanies } from '../interfaces/InsuranceCompanies';
import { Specialization } from '../interfaces/specialization';

export const insuranceCompaniesFeatureKey = 'insuranceCompanies';

export const initialState: InsuranceCompanies = null;

export const reducer = createReducer(
  initialState,
  on(
    insuranceCompaniesLoaded,
    (state: InsuranceCompanies, action: InsuranceCompaniesPayload) => action.data
  )
);
