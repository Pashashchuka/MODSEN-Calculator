import React, { Component, ReactNode } from 'react';

import { Wrapper } from './ErrorBoundaryStyles';

type TErrorBoundaryProps = {
  children?: ReactNode;
};

type TErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<TErrorBoundaryProps, TErrorBoundaryState> {
  constructor(props: TErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <Wrapper>Oops, something went wrong</Wrapper>;
    }

    return children;
  }
}
