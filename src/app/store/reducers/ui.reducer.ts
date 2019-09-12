import * as fromUi from '../actions/ui.actions';
import { ThemeColor } from 'src/app/models/ui';

const dark = {
    darkORlight: 'dark',
    color: '#EBEBEB',
    dark: true,
    bg: '#1A1818'
}

const backgroundDark = '#333333';

const light = {
    darkORlight: 'light',
    color: '#1A1818',
    dark: false,
    bg: '#EEEEEE'
}

export interface UiState {
    themeColor: ThemeColor;
    mobile: boolean;
    sidemenu: boolean;
}

export const initialState: UiState = {
    themeColor: (matchMedia('(prefers-color-scheme: dark)').matches ? dark : light),
    mobile: false,
    sidemenu: false
};

export function reducer(
  state = initialState,
  action: fromUi.ActionsUI
): UiState {
  switch (action.type) {
    case fromUi.DARK_LIGHT: {
      const payload = action.payload;
      const themeColor = payload ? dark : light;
      return {...state, themeColor};
    }
    case fromUi.MENU: {
      const payload = action.payload;
      const sidemenu = payload;
      return {...state, sidemenu};
    }
    case fromUi.MOBILE: {
      const payload = action.payload;
      const mobile = payload;
      return {...state, mobile};
    }

    case fromUi.RESET: {
      return initialState;
    }

    default:
      return state;
  }
}
