import React, { FC } from 'react';

import { LANGUAGE_OPTIONS } from 'constants/languageOptions';

import { useInputLanguages } from './hooks';

import { Select, SelectItem } from './LanguageInputStyles';

export const LanguageInput: FC = () => {
  const { actualLanguage, changeLanguage } = useInputLanguages();

  return (
    <Select defaultValue={actualLanguage} onChange={changeLanguage} name="language-select">
      {LANGUAGE_OPTIONS.map(({ id, content, value }) => (
        <SelectItem key={id} value={value}>
          {content}
        </SelectItem>
      ))}
    </Select>
  );
};
