import { css } from '@emotion/react';

const buttonTheme = {
  light: {
    primary: {
      border: {
        normal: '#ff3e3e',
        hover: '#ff3e3e',
        active: '#db0030',
        disabled: '#fd7373',
      },
      background: {
        normal: '#ff3e3e',
        hover: '#ff3e3e',
        active: '#db0030',
        disabled: '#fd7373',
      },
      color: {
        normal: '#fff',
        hover: '#fff',
        active: '#fff',
        disabled: '#f3f3f3',
      },
      ripple: '#ffffff54',
    },
    secondary: {
      border: {
        normal: '#525252',
        hover: '#ff3e3e',
        active: '#db0030',
        disabled: '#fd7373',
      },
      background: {
        normal: '#ffffff',
        hover: '#ffffff',
        active: '#f3f3f3',
        disabled: '#fd7373',
      },
      color: {
        normal: '#000000',
        hover: '#fff',
        active: '#fff',
        disabled: '#f3f3f3',
      },
      ripple: '#83838352',
    },
    light: {
      border: {
        normal: 'transparent',
        hover: 'transparent',
        active: 'transparent',
        disabled: 'transparent',
      },
      background: {
        normal: '#f7f9fd',
        hover: '#eff1f5',
        active: '#eff1f5',
        disabled: '#eee',
      },
      color: {
        normal: '#000000',
        hover: '#fff',
        active: '#fff',
        disabled: '#8f8f8f',
      },
      ripple: '#ffffff54',
    },
  },
};

export const buttonStyle = (theme: 'light', variant: 'primary' | 'secondary' | 'light') => css`
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 0.75rem 1.125rem;
  border-radius: 0.125rem;
  word-break: keep-all;

  transition: all 150ms ease;

  cursor: pointer;
  user-select: none;

  :enabled {
    border: 1px solid ${buttonTheme[theme][variant].border.normal};

    background-color: ${buttonTheme[theme][variant].background.normal};

    color: ${buttonTheme[theme][variant].color.normal};

    :hover {
      border: 1px solid ${buttonTheme[theme][variant].border.hover} !important;

      background-color: ${buttonTheme[theme][variant].background.hover};
    }
  }

  :disabled {
    border: 1px solid ${buttonTheme[theme][variant].border.disabled};

    background-color: ${buttonTheme[theme][variant].background.disabled};

    color: ${buttonTheme[theme][variant].color.disabled};
  }
`;
