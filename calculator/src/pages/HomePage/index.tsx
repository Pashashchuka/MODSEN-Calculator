import React, { FC } from 'react';

import { ErrorBoundary } from 'components/ErrorBoundary';
import { Container } from 'components/Container';
import History from 'components/History';

import { Wrapper } from './HomePageStyles';

export const HomePage: FC = () => {
  return (
    <Wrapper>
      <Container />
      <ErrorBoundary>
        <History />
      </ErrorBoundary>
    </Wrapper>
  );
};
