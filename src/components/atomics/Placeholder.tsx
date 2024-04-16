/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css, useTheme } from '@emotion/react';
import React, { ReactNode } from 'react';

interface PlaceholderProps extends React.ComponentProps<'div'> {
  variant?: keyof Theme['colors'];
  weight?: keyof Theme['fontWeight'];
  size?: keyof Theme['fontSize'];
  children?: ReactNode;
}

const placeholderStyle = (palette: ColorPalette) => css`
  /* layout */
  overflow: hidden;

  /* font */
  color: ${palette.color?.normal};
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Placeholder = ({
  variant = 'primary',
  weight = 'md',
  size = 'md',
  style,
  ...props
}: PlaceholderProps) => {
  const theme = useTheme();

  return (
    <div
      style={{
        fontSize: theme.fontSize[size],
        fontWeight: theme.fontWeight[weight],
        ...style,
      }}
      css={(theme) => placeholderStyle(theme.colors[variant].placeholder)}
    >
      {props.children}
    </div>
  );
};

export default Placeholder;
