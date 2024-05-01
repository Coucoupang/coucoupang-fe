/** @jsxImportSource @emotion/react */
import { Theme } from '@emotion/react';
import React, { ReactNode } from 'react';
import { iconAnimation, iconTextStyle, type hoverAnimation } from './Style';
interface IconTextProps extends React.ComponentProps<'span'> {
  variant: 'primary';
  size: keyof Theme['fontSize'];
  weight?: keyof Theme['fontWeight'];
  icon: ReactNode;
  children?: ReactNode;
  hover?: hoverAnimation;
}

const IconText = ({
  variant,
  size,
  weight = 'md',
  icon,
  hover = null,
  ...props
}: IconTextProps) => {
  return (
    <span
      css={[
        (theme) => iconTextStyle(theme.name, variant, props.onClick !== null),
        iconAnimation(hover),
      ]}
      {...props}
    >
      {icon}
      {props.children}
    </span>
  );
};

export default IconText;
