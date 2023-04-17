import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { CombinedState } from 'redux';
import { connect } from 'react-redux';

import { selectThemeForProvider } from 'utils/selectThemeForProvider';
import { IinitialState } from 'store/reducers/reducers';
import { getTheme } from 'store/selectors';
import { ITheme } from 'types/types';
import Router from 'router';

import { Header } from 'components/Header';

import GlobalStyles from 'styles/global';
import { Wrapper } from './AppStyles';

type TAppProps = {
  value: string;
};

class App extends Component<TAppProps> {
  constructor(props: TAppProps | Readonly<TAppProps>) {
    super(props);
  }

  render() {
    const value: string = this.props.value;
    const newTheme: ITheme = selectThemeForProvider(value);

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

const mapStateToProps = (
  props: CombinedState<{
    history: IinitialState;
  }>
): { value: string } => ({
  value: getTheme(props)
});

export default connect(mapStateToProps)(App);
