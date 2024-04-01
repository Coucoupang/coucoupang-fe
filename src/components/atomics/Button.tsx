/** @jsxImportSource @emotion/react */
import { ColorPalette, Interpolation, Theme, css } from '@emotion/react';
import React, { ReactNode } from 'react';

interface ButtonStyleProps {
  boxShadow?: boolean;
}

interface ButtonProps extends ButtonStyleProps, React.ComponentProps<'button'> {
  variant: keyof Theme['colors'];
  css?: Interpolation<Theme>;
  children?: ReactNode;
}

const buttonCss = (palette: ColorPalette, props: ButtonStyleProps) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 0.75rem 1.125rem;
  border-radius: 0.125rem;
  word-break: keep-all;

  transition: all 150ms ease;

  cursor: pointer;

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
    ${!props.boxShadow &&
    css`
      display: none;
    `}

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    box-shadow: 0 0 6px ${palette.boxShadow?.hover};

    transition: opacity 150ms ease;

    opacity: 0;
    content: '';
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant,
  css,
  boxShadow = true,
  ...props
}: ButtonProps) => {
  return (
    <button
      css={(theme) => [css, buttonCss(theme.colors[variant].button, { boxShadow })]}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
