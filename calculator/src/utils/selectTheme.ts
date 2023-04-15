import { lightTheme, darkTheme, coloredTheme } from 'styles/theme';

export const updateState = (event: { target: { value: string } }) => {
  switch (event.target.value) {
    case 'light': {
      localStorage.setItem('theme', 'light');
      return {
        theme: lightTheme,
        value: 'light'
      };
    }
    case 'dark': {
      localStorage.setItem('theme', 'dark');
      return {
        theme: darkTheme,
        value: 'dark'
      };
    }
    case 'colored': {
      localStorage.setItem('theme', 'colored');
      return {
        theme: darkTheme,
        value: 'colored'
      };
    }
    default:
      return {
        theme: darkTheme,
        value: 'dark'
      };
  }
};

export const selectThemeForProvider = (value: string) => {
  switch (value) {
    case 'light':
      return lightTheme;
    case 'dark':
      return darkTheme;
    case 'colored':
      return coloredTheme;
    default:
      return darkTheme;
  }
};
