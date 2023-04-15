import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ButtonContainer } from './ClearButtonStyles';

export const ClearButton: FC = () => {
  const { t: translate } = useTranslation();

  return <ButtonContainer>{translate('clear')}</ButtonContainer>;
};
