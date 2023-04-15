import { lightTheme, darkTheme } from 'styles/theme';

export const updateState = (event: { target: { value: string } }) => {
  if (event.target.value === 'light') {
    localStorage.setItem('theme', 'light');

    return {
      theme: lightTheme,
      value: 'light'
    };
  } else if (event.target.value === 'dark') {
    localStorage.setItem('theme', 'dark');

    return {
      theme: darkTheme,
      value: 'dark'
    };
  } else {
    return {
      theme: darkTheme,
      value: 'dark'
    };
  }
};

export const selectThemeForProvider = (value: string) => {
  if (value === 'light') {
    return lightTheme;
  } else if (value === 'dark') {
    return darkTheme;
  } else {
    return darkTheme;
  }
};
