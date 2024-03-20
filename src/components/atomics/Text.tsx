/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css, useTheme } from '@emotion/react';
import React, { ReactNode } from 'react';

interface TextProps extends React.ComponentProps<'div'> {
  variant?: keyof Theme['colors'];
  weight?: keyof Theme['fontWeight'];
  size: keyof Theme['fontSize'];
  children?: ReactNode;
}

const Text: React.FC<TextProps> = ({ variant = 'primary', weight = 'md', ...props }: TextProps) => {
  const theme = useTheme();
  return (
    <div
      style={{ fontSize: theme.fontSize[props.size], fontWeight: theme.fontWeight[weight] }}
      css={(theme) => textStyle(theme.colors[variant].text)}
      {...props}
    >
      {props.children}
    </div>
  );
};

const textStyle = (palette: ColorPalette) => css`
  color: ${palette.color!.normal};
`;

export default Text;
