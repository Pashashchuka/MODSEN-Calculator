import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { themes } from 'utils/selectThemeForProvider';
import { ITheme, TProps } from 'types/types';
import { getTheme } from 'store/selectors';
import Router from 'router';

import { Header } from 'components/Header';

import GlobalStyles from 'styles/global';
import { Wrapper } from './AppStyles';

type TAppProps = {
  value: string;
};

class App extends Component<TAppProps> {
  constructor(props: TAppProps) {
    super(props);
  }

  render() {
    const value: string = this.props.value;
    const newTheme: ITheme = themes[value];

    return (
      <ThemeProvider theme={newTheme}>
        <Wrapper>
          <GlobalStyles />
          <Header />
          <Router />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (props: TProps): { value: string } => ({
  value: getTheme(props)
});

export default connect(mapStateToProps)(App);
