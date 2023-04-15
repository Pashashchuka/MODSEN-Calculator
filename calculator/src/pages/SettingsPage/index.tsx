import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { LanguageInput } from 'components/LanguageInput';
import { ClearButton } from 'components/ClearButton';
import { ThemeInput } from 'components/ThemeInput';

import { Wrapper, Title, Block } from './SettingsPageStyles';

export const SettingsPage: FC = () => {
  const { t: translate } = useTranslation();

  return (
    <Wrapper>
      <Block>
        <Title>{translate('settings')}</Title>
        <ThemeInput />
        <LanguageInput />
        <ClearButton />
      </Block>
    </Wrapper>
  );
};
