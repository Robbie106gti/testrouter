import { Action } from '@ngrx/store';

export const DARK_LIGHT = '[UI] Dark or Light theme';
export const RESET = '[UI] Reset';
export const MENU = '[UI] Open & Close sidemenu';
export const MOBILE = '[UI] Configure UI for mobile/desktop';

export class DarkLight implements Action {
    readonly type = DARK_LIGHT;
    constructor(public payload: any) {}
  }
  export class Reset implements Action {
    readonly type = RESET;
    constructor(public payload: any) {}
  }
  export class Menu implements Action {
    readonly type = MENU;
    constructor(public payload: any) {}
  }
  export class Mobile implements Action {
    readonly type = MOBILE;
    constructor(public payload: any) {}
  }

export type ActionsUI = DarkLight | Reset | Menu | Mobile;
