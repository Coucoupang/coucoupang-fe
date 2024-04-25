/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { ReactNode } from 'react';

interface ButtonGroupProps extends React.ComponentProps<'div'> {
  vertical?: boolean;
  separatorColor?: string;
  children?: ReactNode;
}

const buttonGroupStyle = (vertical: boolean, separatorColor: string) => css`
  display: flex;

  ${vertical
    ? css`
        flex-direction: column;
        button:first-of-type {
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
          ${separatorColor &&
          css`
            border-bottom-color: ${separatorColor};
          `}
          :hover {
            z-index: 2;
          }
        }
        button:last-of-type {
          border-top-left-radius: 0;
          border-top-right-radius: 0;
          ${separatorColor &&
          css`
            border-top-color: ${separatorColor};
          `}
          margin-top: -1px;
          :hover {
            z-index: 2;
          }
        }
        button:not(:first-of-type):not(:last-of-type) {
          border-radius: 0;
          margin-top: -1px;
          ${separatorColor &&
          css`
            border-top-color: ${separatorColor};
          `}
          :hover {
            z-index: 2;
          }
        }
      `
    : css`
        flex-direction: row;
        button:first-of-type {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          ${separatorColor &&
          css`
            border-right-color: ${separatorColor};
          `}
          :hover {
            z-index: 2;
          }
        }
        button:last-of-type {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          ${separatorColor &&
          css`
            border-left-color: ${separatorColor};
          `}
          margin-left: -1px;
          :hover {
            z-index: 2;
          }
        }
        button:not(:first-of-type):not(:last-of-type) {
          border-radius: 0;
          margin-left: -1px;
          ${separatorColor &&
          css`
            border-left-color: ${separatorColor};
          `}
          :hover {
            z-index: 2;
          }
        }
      `}
`;

const ButtonGroup = ({ vertical = false, separatorColor = '', ...props }: ButtonGroupProps) => {
  return (
    <div style={props.style} css={buttonGroupStyle(vertical, separatorColor)} {...props}>
      {props.children}
    </div>
  );
};

export default ButtonGroup;
