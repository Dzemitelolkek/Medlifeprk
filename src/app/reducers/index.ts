import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { routerReducer, RouterReducerState, SerializedRouterStateSnapshot } from '@ngrx/router-store';
import { Config } from '../interfaces/config';
import { Carusel } from '../interfaces/carusel';
import { CompanyHistory } from '../interfaces/company-history';
import { Doctor } from '../interfaces/doctor';
import { ServiceCategory } from '../interfaces/service-categories';
import { Licenses } from '../interfaces/licenses';
import { Service } from '../interfaces/service';
import { Specialization } from '../interfaces/specialization';
import { GeneralInfo } from '../interfaces/generalInfo';
import { SpecServiceMap } from '../actions/doctors-spec-service-map.actions';
import * as fromConfig from './config.reducer';
import * as fromMenuElements from './menu-elements.reducer';
import * as fromCurrentPage from './current-page.reducer';
import * as fromCarusel from './carusel.reducer';
import * as fromCompanyHistory from './company-history.reducer';
import * as fromDoctors from './doctors.reducer';
import * as fromServiceCategories from './serviceCategories.reducer';
import * as fromLicensesCategories from './licenses.reducer';
import * as fromServices from './services.reducer';
import * as fromSpecializations from './specializations.reducer';
import * as fromGeneralInfo from './general-info.reducer';
import * as fromDoctorsSpecServiceMap from './doctors-spec-service-map.reducer';
import * as fromGallery from './gallery.reducer';
import { MyImageData } from '../interfaces/image-data';

export interface State {
  router: RouterReducerState<SerializedRouterStateSnapshot>;
  [fromConfig.configFeatureKey]: Config;
  [fromMenuElements.menuElementsFeatureKey]: Array<string>;
  [fromCurrentPage.currentPageFeatureKey]: number;
  [fromCarusel.mainCaruselFeatureKey]: Carusel[];
  [fromCompanyHistory.companyHistoryFeatureKey]: CompanyHistory;
  [fromDoctors.doctorsFeatureKey]: Doctor[];
  [fromServiceCategories.serviceCategoriesFeatureKey]: ServiceCategory[];
  [fromLicensesCategories.licensesFeatureKey]: Licenses[];
  [fromServices.serviceFeatureKey]: Service[];
  [fromSpecializations.specializationsFeatureKey]: Specialization[];
  [fromGeneralInfo.generalInfoFeatureKey]: GeneralInfo;
  [fromDoctorsSpecServiceMap.doctorsSpecServiceMapFeatureKey]: SpecServiceMap;
  [fromGallery.galleryFeatureKey]: MyImageData[];
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer,
  [fromConfig.configFeatureKey]: fromConfig.reducer,
  [fromMenuElements.menuElementsFeatureKey]: fromMenuElements.reducer,
  [fromCurrentPage.currentPageFeatureKey]: fromCurrentPage.reducer,
  [fromCarusel.mainCaruselFeatureKey]: fromCarusel.reducer,
  [fromCompanyHistory.companyHistoryFeatureKey]: fromCompanyHistory.reducer,
  [fromDoctors.doctorsFeatureKey]: fromDoctors.reducer,
  [fromServiceCategories.serviceCategoriesFeatureKey]: fromServiceCategories.reducer,
  [fromLicensesCategories.licensesFeatureKey]: fromLicensesCategories.reducer,
  [fromServices.serviceFeatureKey]: fromServices.reducer,
  [fromSpecializations.specializationsFeatureKey]: fromSpecializations.reducer,
  [fromGeneralInfo.generalInfoFeatureKey]: fromGeneralInfo.reducer,
  [fromDoctorsSpecServiceMap.doctorsSpecServiceMapFeatureKey]: fromDoctorsSpecServiceMap.reducer,
  [fromGallery.galleryFeatureKey]: fromGallery.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
