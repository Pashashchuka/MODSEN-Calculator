import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { useClearButton } from './hooks';

import { ButtonContainer } from './ClearButtonStyles';

export const ClearButton: FC = () => {
  const { t: translate } = useTranslation();
  const { clearHistory } = useClearButton();

  return <ButtonContainer onClick={clearHistory}>{translate('clear')}</ButtonContainer>;
};
