import { createAction, props } from "@ngrx/store";
import { CompanyHistory } from "../interfaces/company-history";

export interface CompanyHistoryPayload {
    data: CompanyHistory
}

export const companyHistoryLoaded = createAction(
    '[Company history] Company history loaded',
    props<CompanyHistoryPayload>()
);