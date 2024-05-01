/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react';
import React, { ReactNode, useRef } from 'react';
import useRipple from '../../../hooks/useRipple';
import { buttonStyle } from './Style';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: 'primary' | 'secondary' | 'light';
  css?: Interpolation<Theme>;
  children?: ReactNode;
}

const Button = ({ variant, css, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { ripple } = useRipple<HTMLButtonElement>({
    ref: buttonRef,
    duration: 1000,
  });

  return (
    <button ref={buttonRef} css={(theme) => [css, buttonStyle(theme.name, variant)]} {...props}>
      {props.children}
      {ripple}
    </button>
  );
};

export default Button;
