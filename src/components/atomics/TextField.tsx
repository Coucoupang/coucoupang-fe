/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css } from '@emotion/react';
import React from 'react';

interface TextFieldProps extends React.ComponentProps<'input'> {
  width?: string;
  variant: keyof Theme['colors'];
}

const TextField: React.FC<TextFieldProps> = ({ width = '100%', ...props }: TextFieldProps) => {
  return (
    <input
      type="text"
      style={{ width }}
      css={(theme) => textFieldStyle(theme, theme.colors[props.variant].textfield)}
      {...props}
    />
  );
};

const textFieldStyle = (theme: Theme, palette: ColorPalette) => css`
  padding: 0.75rem 0.625rem;
  outline: none;
  border-radius: 0.125rem;
  transition: all 100ms ease;

  :enabled {
    border: 1px solid ${palette.border!.normal};
    color: ${palette.color?.normal};
    :focus {
      border: 1px solid ${palette.border?.focus};
      //box-shadow: 0 0 6px ${theme.boxShadow};
    }
  }

  :disabled {
    border: 1px solid ${palette.border!.disabled};
    background-color: ${palette.background!.disabled};
    color: ${palette.color?.disabled};
  }
`;

export default TextField;
