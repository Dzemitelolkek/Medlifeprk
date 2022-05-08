import { createReducer, on } from "@ngrx/store";
import { companyHistoryLoaded, CompanyHistoryPayload } from "../actions/company-history.actions";
import { CompanyHistory } from "../interfaces/company-history";

export const companyHistoryFeatureKey = 'companyHistory';
const initialState: CompanyHistory = null;

export const reducer = createReducer(
    initialState,
    on(
        companyHistoryLoaded,
        (state: CompanyHistory, action: CompanyHistoryPayload) => action.data
    ),
);
