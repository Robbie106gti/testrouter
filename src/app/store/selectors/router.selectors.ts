import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import { Router, RouterState } from 'src/app/models/router';
import * as fromRouter from '@ngrx/router-store';


export const itemsDoors = createSelector(
    fromFeature.getRouterFeature,
    (router: any) => router
  );
