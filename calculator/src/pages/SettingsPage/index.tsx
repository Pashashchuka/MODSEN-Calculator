import React, { FC } from 'react';

import { ClearButton } from 'components/ClearButton';
import { ThemeInput } from 'components/ThemeInput';

import { Wrapper, Title, Block } from './SettingsPageStyles';

export const SettingsPage: FC = () => {
  return (
    <Wrapper>
      <Block>
        <Title>Settings</Title>
        <ThemeInput />
        <ClearButton />
      </Block>
    </Wrapper>
  );
};
