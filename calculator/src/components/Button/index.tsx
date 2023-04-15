import React, { FC } from 'react';

import { ButtonContainer } from './ButtonStyles';

interface IButtonProps {
  value: string;
  type: string;
}

export const Button: FC<IButtonProps> = ({ value, type }) => {
  return (
    <ButtonContainer className={type || ''} value={value} key={value}>
      {value}
    </ButtonContainer>
  );
};
