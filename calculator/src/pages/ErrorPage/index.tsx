import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useErrorPage } from './hooks';

import { Title, Wrapper, Subtitle } from './ErrorPageStyles';

export const ErrorPage: FC = () => {
  const { t: translate } = useTranslation();
  const { returnPreviousPage } = useErrorPage();

  return (
    <Wrapper>
      <Title>{translate('notFound')}</Title>
      <Subtitle onClick={returnPreviousPage}>{translate('keepCalm')}</Subtitle>
    </Wrapper>
  );
};
