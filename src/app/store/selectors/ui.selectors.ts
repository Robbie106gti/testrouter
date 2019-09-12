import { createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import { UiState } from '../reducers/ui.reducer';

export const getUiState = createSelector(
  fromFeature.getUiFeature,
  (state: UiState) => state
);

export const getThemeColor = createSelector(
  fromFeature.getUiFeature,
  (state: UiState) => state.themeColor
);

