import { AppDispatch } from 'store/types';

export const SET_THEME = 'SET_THEME';

export const setTheme = (payload: string) => (dispatch: AppDispatch) => {
  dispatch({ type: SET_THEME, payload });
};
