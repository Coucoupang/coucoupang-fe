/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css, keyframes } from '@emotion/react';
import Text from 'components/atomics/Text';
import React, { ReactNode } from 'react';

type hoverAnimation = 'toLeft' | 'toRight' | null;

interface IconTextProps extends React.ComponentProps<'span'> {
  variant: keyof Theme['colors'];
  size: keyof Theme['fontSize'];
  weight?: keyof Theme['fontWeight'];
  icon: ReactNode;
  children?: ReactNode;
  hover?: hoverAnimation;
}

const IconText: React.FC<IconTextProps> = ({
  variant,
  size,
  weight = 'md',
  icon,
  hover = null,
  ...props
}: IconTextProps) => {
  return (
    <span
      css={[
        (theme) => iconTextStyle(props.onClick !== null, theme.colors[variant].text),
        iconAnimation(hover),
      ]}
      {...props}
    >
      {icon}
      <Text
        variant={variant}
        size={size}
        weight={weight}
        style={{ display: 'inline', marginLeft: '0.375rem' }}
      >
        {props.children}
      </Text>
    </span>
  );
};

const toLeft = keyframes`
  from, to {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-20%);
  }
`;

const iconTextStyle = (isButton: boolean, palette: ColorPalette) => css`
  display: inline-flex;
  align-items: center;
  color: ${palette.color?.normal};
  transition: all 150ms ease;
  ${isButton &&
  css`
    cursor: pointer;
    user-select: none;
  `}
`;

const iconAnimation = (name: hoverAnimation) => css`
  ${name === 'toLeft' &&
  css`
    :hover svg {
      animation: ${toLeft} 1000ms ease infinite;
    }
  `}
`;

export default IconText;
