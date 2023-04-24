import React, { FC } from 'react';

import { CENTRAL_BUTTONS } from 'constants/buttonOptions';

import { Button } from 'components/Button';

import { Wrapper } from './KeypadStyles';

interface IKeypadProps {
  handleClick: (content: string) => void;
}

export const Keypad: FC<IKeypadProps> = ({ handleClick }) => {
  return (
    <Wrapper>
      {CENTRAL_BUTTONS.map(({ id, content, type }) => (
        <Button key={id} value={content} handleClick={handleClick} type={type} />
      ))}
    </Wrapper>
  );
};
