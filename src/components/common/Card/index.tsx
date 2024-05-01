/** @jsxImportSource @emotion/react */
import { Theme, css } from '@emotion/react';
import React, { ReactNode } from 'react';
import { cardStyle } from './Style';

interface CardProps extends React.ComponentProps<'div'> {
  variant: 'primary' | 'secondary' | 'light';
  width?: string;
  height?: string;
  border?: boolean;
  hover?: boolean;
  children?: ReactNode;
}

const Card = ({ variant, width, height, border, hover, children, ...props }: CardProps) => {
  return (
    <div
      style={{ width, height, ...props.style }}
      css={(theme) => cardStyle(theme.name, variant, border, hover)}
    >
      {children}
    </div>
  );
};

export default Card;
