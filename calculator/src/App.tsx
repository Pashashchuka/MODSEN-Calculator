import React, { Component } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';

import { updateState, selectThemeForProvider } from 'utils/selectTheme';
import { ITheme } from 'types/types';
import Router from 'router';

import { Header } from 'components/Header';

import GlobalStyles, { Wrapper } from 'styles/global';
import { darkTheme } from 'styles/theme';

type TAppProps = {
  theme?: ITheme;
  value?: string;
  changeTheme?: (event: {
    target: {
      value: string;
    };
  }) => void;
};

class App extends Component<object, TAppProps> {
  constructor(props: TAppProps) {
    super(props);
    this.state = {
      theme: darkTheme,
      value: localStorage.getItem('theme'),
      changeTheme: this.changeTheme
    };
  }

  changeTheme = (event: { target: { value: string } }) => {
    const data = updateState(event);
    this.setState(data);
  };

  render() {
    const value = this.state.value;
    const theme = selectThemeForProvider(value);

    return (
      <ThemeContext.Provider value={this.state}>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Header />
            <Router />
            <GlobalStyles />
          </Wrapper>
        </ThemeProvider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
