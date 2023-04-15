import React, { FC } from 'react';

import { Firm, Line, Power, Series, LogoWrapper, Wrapper } from './LogoBlockStyles';

export const LogoBlock: FC = () => {
  return (
    <Wrapper>
      <Firm>Citizen</Firm>
      <LogoWrapper>
        <Series>LC-110NR</Series>
        <Line />
        <Power>Auto power off</Power>
      </LogoWrapper>
    </Wrapper>
  );
};
