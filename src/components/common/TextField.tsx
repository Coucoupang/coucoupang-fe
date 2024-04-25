/** @jsxImportSource @emotion/react */
import { ColorPalette, Theme, css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';

interface TextFieldProps extends React.ComponentProps<'input'> {
  variant: keyof Theme['colors'];
  type?: string;
  width?: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  children?: string;
}

const container = () => css`
  position: relative;
`;

const textFieldStyle = (palette: ColorPalette, label: boolean) => css`
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
    border: 1px solid ${palette.border?.normal};
    color: ${palette.color?.normal};
    :focus {
      border: 1px solid ${palette.border?.focus};
    }
  }

  :disabled {
    border: 1px solid ${palette.border?.disabled};
    background-color: ${palette.background?.disabled};
    color: ${palette.color?.disabled};
  }

  transition: all 100ms ease;

  outline: none;
`;

const normalLabel = (palette: ColorPalette, disabled: boolean) => css`
  position: absolute;
  top: 50%;

  margin-top: -0.5rem;
  margin-left: 0.625rem;

  color: ${disabled ? palette.color?.disabled : palette.color?.normal};
  font-size: 0.875rem;
  line-height: 1rem;

  transition: all 150ms ease;

  pointer-events: none;
`;

const floatLabel = (palette: ColorPalette, focus: boolean, disabled: boolean) => css`
  position: absolute;
  top: 0.375rem;

  margin-left: 0.625rem;

  color: ${focus
    ? palette.border?.focus
    : disabled
      ? palette.color?.disabled
      : palette.color?.normal};
  font-size: 0.75rem;
  line-height: 1rem;

  transition: all 150ms ease;

  pointer-events: none;
`;

const TextField = ({
  variant,
  type = 'text',
  width = '100%',
  label = '',
  disabled = false,
  placeholder = '',
  children = '',
  onChange,
  onFocus,
  onBlur,
  ...props
}: TextFieldProps) => {
  const [focus, setFocus] = useState<boolean>(false);
  const valueRef = useRef<string | undefined>(children);
  const textRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    valueRef.current = children;
    if (textRef.current) textRef.current.value = valueRef.current;
  }, [children]);

  return (
    <div css={container} onClick={() => textRef.current?.focus()}>
      {label && (
        <span
          css={(theme) =>
            valueRef.current || focus
              ? floatLabel(theme.colors[variant].textfield, focus, disabled)
              : normalLabel(theme.colors[variant].textfield, disabled)
          }
        >
          {label}
        </span>
      )}
      <input
        ref={textRef}
        type={type}
        style={{ width }}
        onChange={(e) => {
          valueRef.current = textRef.current?.value;
          if (onChange) onChange(e);
        }}
        onFocus={(e) => {
          setFocus(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setFocus(false);
          if (onBlur) onBlur(e);
        }}
        css={(theme) => textFieldStyle(theme.colors[variant].textfield, !!label)}
        placeholder={label === '' ? placeholder : ''}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default TextField;
