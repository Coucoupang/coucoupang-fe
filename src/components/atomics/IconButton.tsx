/** @jsxImportSource @emotion/react */
import { ColorPalette, Interpolation, Theme, css } from '@emotion/react';
import React, { ReactNode, useRef } from 'react';

interface IconButtonProps extends React.ComponentProps<'button'> {
  variant: keyof Theme['colors'];
  css?: Interpolation<Theme>;
  children?: ReactNode;
}

const iconButtonCss = (palette: ColorPalette) => css`
  /* layout */
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;

  /* box */
  border: none;
  border-radius: 50%;

  /* background */
  background-size: 200% auto;
  background-image: linear-gradient(
    to right bottom,
    ${palette.background?.hover} 0%,
    ${palette.background?.normal} 51%,
    ${palette.background?.hover} 100%
  );

  /* font */
  color: white;
  font-weight: bold;

  /* animation */
  transition: all 300ms ease;

  /* misc */
  cursor: pointer;
  user-select: none;

  /* action */
  :hover {
    background-position: right center;
  }
`;

const IconButton = ({ variant, css, ...props }: IconButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={buttonRef}
      css={(theme) => [css, iconButtonCss(theme.colors[variant].iconbutton)]}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default IconButton;
