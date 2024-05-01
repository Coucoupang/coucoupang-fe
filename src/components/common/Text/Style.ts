import { css } from '@emotion/react';

const textTheme = {
  light: {
    primary: {
      color: {
        normal: '#000',
      },
    },
    light: {
      color: {
        normal: '#000',
      },
    },
  },
};

export const textStyle = (theme: 'light', variant: 'primary' | 'light') => css`
  color: ${textTheme[theme][variant].color};
  word-break: keep-all;
`;
