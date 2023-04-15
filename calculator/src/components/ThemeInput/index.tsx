import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { THEME_OPTIONS } from 'constants/themeOptions';

import { Select, SelectItem } from './ThemeInputStyles';

export const ThemeInput: FC = () => {
  const { t: translate } = useTranslation();
  const { value, changeTheme } = useContext(ThemeContext);

  return (
    <Select defaultValue={value} onChange={changeTheme}>
      {THEME_OPTIONS.map(({ id, content, value }) => (
        <SelectItem key={id} value={value}>
          {translate(`${content}`)}
        </SelectItem>
      ))}
    </Select>
  );
};
