import React, { FC } from 'react';

import CalculatorContainer from 'components/CalculatorContainer';
import { ErrorBoundary } from 'components/ErrorBoundary';
import History from 'components/History';

import { Wrapper } from './HomePageStyles';

export const HomePage: FC = () => {
  return (
    <Wrapper>
      <CalculatorContainer />
      <ErrorBoundary>
        <History />
      </ErrorBoundary>
    </Wrapper>
  );
};
