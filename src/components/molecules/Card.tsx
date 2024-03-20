/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css } from '@emotion/react';
import React, { ReactNode } from 'react';

interface CardProps extends React.ComponentProps<'div'> {
  variant: keyof Theme['colors'];
  width?: string;
  height?: string;
  border?: boolean;
  hover?: boolean;
  children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
  width = 'auto',
  height = 'auto',
  style,
  ...props
}: CardProps) => {
  return (
    <div
      style={{ width, height, ...style }}
      css={(theme) => cardStyle(props, theme.colors[props.variant].card)}
      {...props}
    >
      {props.children}
    </div>
  );
};

const cardStyle = (props: CardProps, palette: ColorPalette) => css`
  position: relative;
  padding: 0.625rem 1.125rem;
  ${props.border
    ? `
  box-shadow: 0 0 3px ${palette.boxShadow?.hover};
  border: 1px solid ${palette.border?.normal};`
    : 'border: 0;'}
  border-radius: 0.25rem;
  background-color: ${palette.background?.normal};
  color: ${palette.color?.normal};

  ${props.hover &&
  `
    :hover {
      background-color: ${palette.background?.hover};
    }
  `}
  transition: all 150ms ease;
`;

export default Card;
