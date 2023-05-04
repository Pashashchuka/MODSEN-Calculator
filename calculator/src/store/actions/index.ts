import { AppDispatch } from 'store/types';

export const SET_THEME = 'SET_THEME';
export const SET_IS_DISPLAY_ERROR = 'SET_IS_DISPLAY_ERROR';
export const SET_IS_HIDDEN_HISTORY = 'SET_IS_HIDDEN_HISTORY';

export const setTheme = (payload: string) => (dispatch: AppDispatch) => {
  dispatch({ type: SET_THEME, payload });
};

export const setIsDisplayError = (payload: boolean) => (dispatch: AppDispatch) => {
  dispatch({ type: SET_IS_DISPLAY_ERROR, payload });
};

export const setIsHiddenHistory = (payload: boolean) => (dispatch: AppDispatch) => {
  dispatch({ type: SET_IS_HIDDEN_HISTORY, payload });
};
