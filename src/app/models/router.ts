import { Params } from '@angular/router';

export interface Router {
    state: RouterState;
    navigationId: number;
  }

  export interface RouterState {
    url: string;
    params: Params;
    queryParams: Params;
  }
