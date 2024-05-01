import { css } from '@emotion/react';

const cardTheme = {
  light: {
    primary: {
      border: {
        normal: '#ccc',
      },
      background: {
        normal: '#fff',
        hover: '#f7fbff',
      },
      color: {
        normal: '#000',
      },
      boxShadow: {
        hover: '#ddd',
      },
    },
    secondary: {
      border: {
        normal: '#ccc',
      },
      background: {
        normal: '#fff',
        hover: '#f7fbff',
      },
      color: {
        normal: '#000',
      },
      boxShadow: {
        hover: '#ddd',
      },
    },
    light: {
      border: {
        normal: '#ccc',
      },
      background: {
        normal: '#fff',
        hover: '#f7fbff',
      },
      color: {
        normal: '#000',
      },
      boxShadow: {
        hover: '#ddd',
      },
    },
  },
};

export const cardStyle = (
  theme: 'light',
  variant: 'primary' | 'secondary' | 'light',
  border?: boolean,
  hover?: boolean,
) => css`
  position: relative;
  padding: 0.625rem 1.125rem;
  ${border
    ? `
box-shadow: 0 0 2px ${cardTheme[theme][variant].boxShadow.hover};
border: 1px solid ${cardTheme[theme][variant].border.normal};`
    : 'border: 0;'}
  border-radius: 0.25rem;
  background-color: ${cardTheme[theme][variant].background.normal};
  color: ${cardTheme[theme][variant].color.normal};
  overflow: hidden;
  ${hover &&
  `
  :hover {
    background-color: ${cardTheme[theme][variant].background.hover};
  }
`}
  transition: all 150ms ease;
`;
