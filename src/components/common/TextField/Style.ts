import { css } from '@emotion/react';

const textFieldTheme = {
  light: {
    primary: {
      border: {
        normal: '#ccc',
        focus: '#ff0038',
        disabled: '#bbb',
      },
      background: {
        normal: '#fff',
        disabled: '#eee',
      },
      color: {
        normal: '#000',
        disabled: '#6d6d6d',
      },
    },
    secondary: {
      border: {
        normal: '#ccc',
        focus: '#ff3e3e',
        disabled: '#bbb',
      },
      background: {
        normal: '#fff',
        disabled: '#eee',
      },
      color: {
        normal: '#000',
        disabled: '#6d6d6d',
      },
    },
    light: {
      border: {
        normal: '#ccc',
        focus: '#ff3e3e',
        disabled: '#bbb',
      },
      background: {
        normal: '#fff',
        disabled: '#eee',
      },
      color: {
        normal: '#000',
        disabled: '#6d6d6d',
      },
    },
  },
};

export const container = () => css`
  position: relative;
`;

export const textFieldStyle = (
  label: boolean,
  theme: 'light',
  variant: 'primary' | 'secondary' | 'light',
) => css`
  ${label
    ? css`
        padding: 1.5rem 0.625rem 0.5rem 0.625rem;
      `
    : css`
        padding: 0.75rem 0.625rem;
      `}
  box-sizing: border-box;
  border: 0;
  border-radius: 0.175rem;

  :enabled {
    border: 1px solid ${textFieldTheme[theme][variant].border.normal};
    color: ${textFieldTheme[theme][variant].color.normal};
    :focus {
      border: 1px solid ${textFieldTheme[theme][variant].border.focus};
    }
  }

  :disabled {
    border: 1px solid ${textFieldTheme[theme][variant].border.disabled};
    background-color: ${textFieldTheme[theme][variant].background.disabled};
    color: ${textFieldTheme[theme][variant].color.disabled};
  }

  transition: all 100ms ease;

  outline: none;
`;

export const normalLabel = (
  disabled: boolean,
  theme: 'light',
  variant: 'primary' | 'secondary' | 'light',
) => css`
  position: absolute;
  top: 50%;

  margin-top: -0.5rem;
  margin-left: 0.625rem;

  color: ${disabled
    ? textFieldTheme[theme][variant].color.disabled
    : textFieldTheme[theme][variant].color.normal};
  font-size: 0.875rem;
  line-height: 1rem;

  transition: all 150ms ease;

  pointer-events: none;
`;

export const floatLabel = (
  focus: boolean,
  disabled: boolean,
  theme: 'light',
  variant: 'primary' | 'secondary' | 'light',
) => css`
  position: absolute;
  top: 0.375rem;

  margin-left: 0.625rem;

  color: ${focus
    ? textFieldTheme[theme][variant].border.focus
    : disabled
      ? textFieldTheme[theme][variant].color.disabled
      : textFieldTheme[theme][variant].color.normal};
  font-size: 0.75rem;
  line-height: 1rem;

  transition: all 150ms ease;

  pointer-events: none;
`;
