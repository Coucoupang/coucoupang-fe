/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css } from '@emotion/react';
import React, { ReactNode } from 'react';
import Text from '../atomics/Text';

interface CardProps extends React.ComponentProps<'div'> {
  variant: keyof Theme['colors'];
  width?: string;
  height?: string;
  title?: string;
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
      css={(theme) => cardStyle(theme, theme.colors[props.variant].card)}
      {...props}
    >
      {props.title && (
        <Text size="lg" weight="lg" style={{ marginBottom: '0.5rem' }}>
          {props.title}
        </Text>
      )}
      {props.children}
    </div>
  );
};

const cardStyle = (theme: Theme, palette: ColorPalette) => css`
  position: relative;
  padding: 0.625rem 1.125rem;
  box-shadow: 0 0 3px ${theme.boxShadow};
  border: 1px solid ${palette.border!.normal};
  border-radius: 0.125rem;
  background-color: ${palette.background!.normal};
  color: ${palette.color!.normal};
`;

export default Card;
