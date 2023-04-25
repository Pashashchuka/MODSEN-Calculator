import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';

import { themes } from 'utils/selectThemeForProvider';
import { ITheme, TProps } from 'types/types';
import { getTheme } from 'store/selectors';
import { PATHS } from 'router/paths';
import Router from 'router';

import { Header } from 'components/Header';

import GlobalStyles from 'styles/global';
import { Wrapper } from './AppStyles';

type TAppProps = {
  value: string;
};

type TAppState = {
  isHiddenHeader: boolean;
};
class App extends Component<TAppProps, TAppState> {
  constructor(props: TAppProps) {
    super(props);
    this.state = {
      isHiddenHeader: false
    };
  }

  componentDidMount() {
    const currentPath = window.location.pathname;

    if (currentPath !== PATHS.HOME && currentPath !== PATHS.SETTINGS) {
      this.setState({
        isHiddenHeader: true
      });
    }
  }

  render() {
    const value: string = this.props.value;
    const newTheme: ITheme = themes[value];
    const { isHiddenHeader } = this.state;

    return (
      <ThemeProvider theme={newTheme}>
        <Wrapper>
          <GlobalStyles />
          <Header isHiddenHeader={isHiddenHeader} />
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
