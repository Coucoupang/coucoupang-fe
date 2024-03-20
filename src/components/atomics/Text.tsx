/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css } from '@emotion/react';
import React, { ReactNode } from 'react';

interface TextProps extends React.ComponentProps<'div'> {
  variant: keyof Theme['colors'];
  size: keyof Theme['fontSize'];
  children?: ReactNode;
}

const Text: React.FC<TextProps> = (props: TextProps) => {
  return (
    <div
      css={(theme) => textStyle(theme.fontSize[props.size], theme.colors[props.variant].text)}
      {...props}
    >
      {props.children}
    </div>
  );
};

const textStyle = (fontSize: string, palette: ColorPalette) => css`
  color: ${palette.color!.normal};
  font-size: ${fontSize};
`;

export default Text;
