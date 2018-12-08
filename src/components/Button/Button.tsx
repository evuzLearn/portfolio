import React, { FunctionComponent } from 'react';

import './Button.css';

interface ButtonProps {
  onClick?: () => void;
  invert?: boolean;
}

export const Button: FunctionComponent<ButtonProps> = ({ children, onClick, invert }) => {
  const buttonClass = `button button--reset ${invert ? 'button--invert' : ''}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};
