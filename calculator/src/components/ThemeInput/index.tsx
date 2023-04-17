import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { THEME_OPTIONS } from 'constants/themeOptions';

import { useThemeInput } from './hooks';

import { Select, SelectItem } from './ThemeInputStyles';

export const ThemeInput: FC = () => {
  const { t: translate } = useTranslation();
  const { actualTheme, changeTheme } = useThemeInput();

  return (
    <Select defaultValue={actualTheme} onChange={changeTheme}>
      {THEME_OPTIONS.map(({ id, content, value }) => (
        <SelectItem key={id} value={value}>
          {translate(`${content}`)}
        </SelectItem>
      ))}
    </Select>
  );
};
