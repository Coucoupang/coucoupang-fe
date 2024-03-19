/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css } from '@emotion/react';
import React from 'react';

interface TextFieldProps extends React.ComponentProps<'input'> {
  variant: keyof Theme['colors'];
}

const TextField: React.FC<TextFieldProps> = (props: TextFieldProps) => {
  return (
    <input
      type="text"
      css={(theme) => textFieldStyle(theme, theme.colors[props.variant].textfield)}
      {...props}
    />
  );
};

const textFieldStyle = (theme: Theme, palette: ColorPalette) => css`
  position: relative;
  padding: 0.625rem 1.125rem;
  outline: none;
  border: 0;
  border-radius: 0.125rem;
  transition: all 100ms ease;

  :enabled {
    border: 1px solid ${palette.border?.normal};
    color: ${palette.color?.normal};
    :hover {
      ::after {
        opacity: 1;
      }
    }
    :active {
      border: 1px solid ${palette.border?.active};
    }
  }

  :disabled {
    background-color: ${palette.background?.disabled};
    color: ${palette.color?.disabled};
    ::after {
      display: none;
    }
  }

  ::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    box-shadow: 0 0 6px ${theme.boxShadow};
    opacity: 0;
    transition: opacity 150ms ease;
    content: '';
  }
`;

export default TextField;
