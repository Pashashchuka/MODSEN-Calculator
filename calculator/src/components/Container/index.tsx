import React, { Component } from 'react';

import { ErrorBoundary } from 'components/ErrorBoundary';
import { ControlPanel } from 'components/ControlPanel';
import { LogoBlock } from 'components/LogoBlock';
import { Display } from 'components/Display';

import { Block, Wrapper } from './ContainerStyles';

export class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <Block>
          <LogoBlock />
          <ErrorBoundary>
            <Display />
          </ErrorBoundary>
          <ControlPanel />
        </Block>
      </Wrapper>
    );
  }
}
