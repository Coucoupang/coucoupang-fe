import { css, keyframes } from '@emotion/react';

export type hoverAnimation = 'toLeft' | 'toRight' | null;

const iconTextTheme = {
  light: {
    primary: {
      color: {
        normal: '#000',
      },
    },
  },
};

export const toLeft = keyframes`
  from, to {
    transform: translateX(0);
  }
  30% {
    transform: translateX(-20%);
  }
`;

export const iconTextStyle = (theme: 'light', variant: 'primary', isButton: boolean) => css`
  display: inline-flex;
  align-items: center;
  color: ${iconTextTheme[theme][variant].color};
  ${isButton &&
  css`
    cursor: pointer;
    user-select: none;
  `}
`;

export const iconAnimation = (name: hoverAnimation) => css`
  ${name === 'toLeft' &&
  css`
    :hover svg {
      animation: ${toLeft} 1000ms ease infinite;
    }
  `}
`;
