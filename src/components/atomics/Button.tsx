/** @jsxImportSource @emotion/react */
import { ColorPalette, Interpolation, Theme, css } from '@emotion/react';
import React, { ReactNode, useRef } from 'react';
import useRipple from '../../hooks/useRipple';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: keyof Theme['colors'];
  css?: Interpolation<Theme>;
  children?: ReactNode;
}

const buttonCss = (palette: ColorPalette) => css`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 0.75rem 1.125rem;
  border-radius: 0.125rem;
  word-break: keep-all;

  transition: all 150ms ease;

  cursor: pointer;
  user-select: none;

  :enabled {
    border: 1px solid ${palette.border?.normal};

    background-color: ${palette.background?.normal};

    color: ${palette.color?.normal};

    :hover {
      border: 1px solid ${palette.border?.hover} !important;

      background-color: ${palette.background?.hover};
    }
  }

  :disabled {
    border: 1px solid ${palette.border?.disabled};

    background-color: ${palette.background?.disabled};

    color: ${palette.color?.disabled};
  }
`;

const Button: React.FC<ButtonProps> = ({ variant, css, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { ripple } = useRipple<HTMLButtonElement>({ ref: buttonRef });

  return (
    <button
      ref={buttonRef}
      css={(theme) => [css, buttonCss(theme.colors[variant].button)]}
      {...props}
    >
      {props.children}
      {ripple}
    </button>
  );
};

export default Button;
