/** @jsxImportSource @emotion/react */
import { Theme, useTheme } from '@emotion/react';
import React, { ReactNode } from 'react';
import { textStyle } from './Style';

interface TextProps extends React.ComponentProps<'div'> {
  variant?: 'primary' | 'light';
  weight?: keyof Theme['fontWeight'];
  size: keyof Theme['fontSize'];
  children?: ReactNode;
}

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
        css={(theme) => textStyle(theme.name, variant)}
        {...props}
      >
        {props.children}
      </div>
    );
  },
);

Text.displayName = 'Text';
export default Text;
