/** @jsxImportSource @emotion/react */
import { ColorPalette, Interpolation, Theme, css } from '@emotion/react';
import React, { ReactNode, useRef } from 'react';

interface SelectProps extends React.ComponentProps<'button'> {
  variant: keyof Theme['colors'];
  css?: Interpolation<Theme>;
  children?: ReactNode;
}

const selectStyle = (palette: ColorPalette) => css`
  /* layout */
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-around;

  /* box */
  border: none;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;

  /* background */
  background-color: ${palette.background?.normal};

  /* misc */
  cursor: pointer;
  user-select: none;

  /* action */
  :hover {
    text-decoration: underline;
  }
`;

const Select = ({ variant, css, ...props }: SelectProps) => {
  const selectRef = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={selectRef}
      css={(theme) => [css, selectStyle(theme.colors[variant].select)]}
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Select;
