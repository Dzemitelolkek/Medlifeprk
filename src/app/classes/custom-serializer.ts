import {
    RouterStateSnapshot,
  } from '@angular/router';
  import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterState } from '../interfaces/router-state';
  
  export class CustomSerializer implements RouterStateSerializer<RouterState> {
    serialize(state: RouterStateSnapshot): RouterState {
      let currentRoute = state.root;
  
      while (currentRoute.firstChild) {
        currentRoute = currentRoute.firstChild;
      }
  
      const {
        url,
        root: { queryParams },
      } = state;
      const { params, data } = currentRoute;
  
      return {
        url,
        root: { params, queryParams, data }
      };
    }
  }