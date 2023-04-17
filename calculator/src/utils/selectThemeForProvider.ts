import { lightTheme, darkTheme, coloredTheme } from 'styles/theme';

export const selectThemeForProvider = (value: string) => {
  switch (value) {
    case 'dark':
      return darkTheme;
    case 'light':
      return lightTheme;
    case 'colored':
      return coloredTheme;
    default:
      return darkTheme;
  }
};
