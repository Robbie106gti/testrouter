import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterState } from 'src/app/models/router';
import { UiState } from './ui.reducer';
import * as fromUi from './ui.reducer';

export interface State {
  uiState: UiState;
  routerState: fromRouter.RouterReducerState;

}

export const reducers: ActionReducerMap<State> = {
  uiState: fromUi.reducer,
  routerState: fromRouter.routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
export const getUiFeature = createFeatureSelector<fromUi.UiState>('uiState');

@Injectable()
export class CustomSerializer implements RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot): RouterState {
    // console.log({ routerState });
    const url = routerState.url;
    const queryParams = routerState.root.queryParams;
    let route = routerState.root;
    while (route.firstChild) {
      route = route.firstChild;
    }
    const params = route.params;
    const state = { url, params, queryParams };
    return state;
  }
}
