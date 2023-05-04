import React, { FC } from 'react';

import {
  RIGHT_CONTROL_BUTTONS,
  LEFT_CONTROL_BUTTONS,
  TOP_BUTTONS
} from 'constants/buttonOptions';

import { Keypad } from 'components/Keypad';
import { Button } from 'components/Button';

import { Container, Wrapper, VerticalBlock, HorizontalBlock } from './ControlPanelStyles';

interface IControlPanelProps {
  handleClick: (content: string) => void;
}

export const ControlPanel: FC<IControlPanelProps> = ({ handleClick }) => {
  return (
    <Container>
      <HorizontalBlock>
        {TOP_BUTTONS.map(({ id, content, type }) => (
          <Button key={id} value={content} type={type} handleClick={handleClick} />
        ))}
      </HorizontalBlock>
      <Wrapper>
        <VerticalBlock>
          {LEFT_CONTROL_BUTTONS.map(({ id, content, type }) => (
            <Button key={id} value={content} type={type} handleClick={handleClick} />
          ))}
        </VerticalBlock>
        <Keypad handleClick={handleClick} />
        <VerticalBlock>
          {RIGHT_CONTROL_BUTTONS.map(({ id, content, type }) => (
            <Button key={id} value={content} type={type} handleClick={handleClick} />
          ))}
        </VerticalBlock>
      </Wrapper>
    </Container>
  );
};
