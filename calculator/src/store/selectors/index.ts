import { AppStateType } from 'store/types';

export const getTheme = (state: AppStateType): string => {
  return state.history.theme;
};
