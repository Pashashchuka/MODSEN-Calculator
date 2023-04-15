import React, { FC } from 'react';

import { NUMBER_BUTTONS } from 'constants/buttonOptions';

import { Button } from 'components/Button';

import { Wrapper } from './KeypadStyles';

export const Keypad: FC = () => {
  return (
    <Wrapper>
      {NUMBER_BUTTONS.map(({ id, context, type }) => (
        <Button key={id} value={context} type={type} />
      ))}
    </Wrapper>
  );
};
