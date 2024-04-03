/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css, useTheme } from '@emotion/react';
import React, { ReactNode } from 'react';

interface TextProps extends React.ComponentProps<'div'> {
  variant?: keyof Theme['colors'];
  weight?: keyof Theme['fontWeight'];
  size: keyof Theme['fontSize'];
  children?: ReactNode;
}

const textStyle = (palette: ColorPalette) => css`
  color: ${palette.color!.normal};
  word-break: keep-all;
`;

const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ variant = 'primary', weight = 'md', size, style, ...props }: TextProps, ref) => {
    const theme = useTheme();
    return (
      <div
        ref={ref}
        style={{
          fontSize: theme.fontSize[size],
          fontWeight: theme.fontWeight[weight],
          ...style,
        }}
        css={(theme) => textStyle(theme.colors[variant].text)}
        {...props}
      >
        {props.children}
      </div>
    );
  },
);

Text.displayName = 'Text';
export default Text;
