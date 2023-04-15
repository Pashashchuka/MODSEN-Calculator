import React, { FC } from 'react';

import { CONTROL_BUTTONS } from 'constants/buttonOptions';

import { Keypad } from 'components/Keypad';
import { Button } from 'components/Button';

import { Wrapper } from './ControlPanelStyles';

export const ControlPanel: FC = () => {
  return (
    <Wrapper>
      {CONTROL_BUTTONS.map(({ id, context, type }) => (
        <Button key={id} value={context} type={type} />
      ))}
      <Keypad />
    </Wrapper>
  );
};
