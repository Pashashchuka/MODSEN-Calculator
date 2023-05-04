import { AppStateType } from 'store/types';

export const getTheme = (state: AppStateType): string => {
  return state.history.theme;
};

export const getIsHiddenHistory = (state: AppStateType): boolean => {
  return state.history.isHiddenHistory;
};

export const getIsDisplayError = (state: AppStateType): boolean => {
  return state.history.isDisplayError;
};
