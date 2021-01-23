import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Config } from '../interfaces/config';
import * as fromConfig from './config.reducer';
import * as fromMenuElements from './menu-elements.reducer';
import * as fromCurrentPage from './current-page.reducer';

export interface State {
  [fromConfig.configFeatureKey]: Config;
  [fromMenuElements.menuElementsFeatureKey]: Array<string>;
  [fromCurrentPage.currentPageFeatureKey]: number;
}

export const reducers: ActionReducerMap<State> = {
  [fromConfig.configFeatureKey]: fromConfig.reducer,
  [fromMenuElements.menuElementsFeatureKey]: fromMenuElements.reducer,
  [fromCurrentPage.currentPageFeatureKey]: fromCurrentPage.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
