/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';
import { buttonGroupStyle } from './Style';

interface ButtonGroupProps extends React.ComponentProps<'div'> {
  vertical?: boolean;
  separatorColor?: string;
  children?: ReactNode;
}

const ButtonGroup = ({ vertical = false, separatorColor = '', ...props }: ButtonGroupProps) => {
  return (
    <div style={props.style} css={buttonGroupStyle(vertical, separatorColor)} {...props}>
      {props.children}
    </div>
  );
};

export default ButtonGroup;
