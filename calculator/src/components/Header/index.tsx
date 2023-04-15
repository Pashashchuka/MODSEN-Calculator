import React, { FC } from 'react';

import { PATHS } from 'router/paths';

import { Title, Wrapper, LinkBLock, Link } from './HeaderStyles';

export const Header: FC = () => {
  return (
    <Wrapper>
      <Title>Calculator</Title>
      <LinkBLock>
        <Link href={PATHS.HOME}>Home</Link>
        <Link href={PATHS.SETTINGS}>Settings</Link>
      </LinkBLock>
    </Wrapper>
  );
};
