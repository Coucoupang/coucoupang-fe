/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css } from '@emotion/react';
import React, { ReactNode } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: keyof Theme['colors'];
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button css={(theme) => buttonStyle(theme.colors[props.variant].button)} {...props}>
      {props.children}
    </button>
  );
};

const buttonStyle = (palette: ColorPalette) => css`
  position: relative;
  padding: 0.625rem 1.125rem;
  border-radius: 0.125rem;
  word-break: keep-all;
  cursor: pointer;
  transition: all 150ms ease;

  :enabled {
    border: 1px solid ${palette.border?.normal};
    background-color: ${palette.background?.normal};
    color: ${palette.color?.normal};
    :hover {
      border: 1px solid ${palette.border?.hover} !important;
      background-color: ${palette.background?.hover};
      ::after {
        opacity: 1;
      }
    }
    :active {
      border: 1px solid ${palette.border?.active};
      background-color: ${palette.background?.active};
    }
  }

  :disabled {
    border: 1px solid ${palette.border?.disabled};
    background-color: ${palette.background?.disabled};
    color: ${palette.color?.disabled};
    ::after {
      display: none;
    }
  }

  ::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 0 6px ${palette.boxShadow?.hover};
    opacity: 0;
    transition: opacity 150ms ease;
    content: '';
  }
`;

export default Button;
