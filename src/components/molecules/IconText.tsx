/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css, keyframes } from '@emotion/react';
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
      {props.children}
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
