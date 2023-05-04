import React, { FC } from 'react';

import { ButtonContainer } from './ButtonStyles';

interface IButtonProps {
  value: string;
  type: string;
  handleClick: (value: string) => void;
}

export const Button: FC<IButtonProps> = ({ value, type, handleClick }) => {
  const onClickButton = (value: string) => () => {
    handleClick(value);
  };

  return (
    <ButtonContainer
      className={type || ''}
      onClick={onClickButton(value)}
      value={value}
      key={value}>
      {value}
    </ButtonContainer>
  );
};
