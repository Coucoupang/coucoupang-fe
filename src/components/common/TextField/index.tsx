/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';
import { container, floatLabel, normalLabel, textFieldStyle } from './Style';

interface TextFieldProps extends React.ComponentProps<'input'> {
  variant: 'primary';
  type?: string;
  width?: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  children?: string;
}

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
              ? floatLabel(theme.name, variant, focus, disabled)
              : normalLabel(theme.name, variant, disabled)
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
        css={(theme) => textFieldStyle(theme.name, variant, !!label)}
        placeholder={label === '' ? placeholder : ''}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};

export default TextField;
