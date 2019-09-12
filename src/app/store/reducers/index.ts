import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromRouter from '@ngrx/router-store';
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

