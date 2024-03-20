/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css } from '@emotion/react';
import React, { ReactNode } from 'react';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant: keyof Theme['colors'];
  children?: ReactNode;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button css={(theme) => buttonStyle(theme, theme.colors[props.variant].button)} {...props}>
      {props.children}
    </button>
  );
};

const buttonStyle = (theme: Theme, palette: ColorPalette) => css`
  position: relative;
  padding: 0.625rem 1.125rem;
  border: 0;
  border-radius: 0.125rem;
  transition: all 100ms ease;

  :enabled {
    background-color: ${palette.background?.normal};
    color: ${palette.color?.normal};
    :hover {
      ::after {
        opacity: 1;
      }
    }
    :active {
      background-color: ${palette.background?.active};
    }
  }

  :disabled {
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
    box-shadow: 0 0 6px ${theme.boxShadow};
    opacity: 0;
    transition: opacity 150ms ease;
    content: '';
  }
`;

export default Button;