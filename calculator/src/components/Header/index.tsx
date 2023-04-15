import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { PATHS } from 'router/paths';

import { Title, Wrapper, LinkBLock, Link } from './HeaderStyles';

export const Header: FC = () => {
  const { t: translate } = useTranslation();

  return (
    <Wrapper>
      <Title>{translate('title')}</Title>
      <LinkBLock>
        <Link href={PATHS.HOME}>{translate('home')}</Link>
        <Link href={PATHS.SETTINGS}>{translate('settings')}</Link>
      </LinkBLock>
    </Wrapper>
  );
};
