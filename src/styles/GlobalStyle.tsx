import React from 'react';
import { Global, css } from '@emotion/react';
import Pretendard from '../assets/fonts/PretendardVariable.woff2';

const animations = {
  toRight: css`
    .toRight-enter {
      opacity: 0;
      transform: translateX(100%);
    }
    .toRight-exit {
      opacity: 1;
    }
    .toRight-enter-active {
      opacity: 1;
      transform: translateX(0);
    }
    .toRight-exit-active {
      opacity: 0;
      transform: translateX(-100%);
    }
    .toRight-enter-active,
    .toRight-exit-active {
      transition: all 300ms ease-in-out;
    }
  `,
  rotateX: css`
    .rotateX-enter {
      opacity: 0;
      //transform: rotateX(0.25turn);
    }
    .rotateX-exit {
      opacity: 1;
    }
    .rotateX-enter-active {
      transform: rotateX(0);
      opacity: 1;
    }
    .rotateX-exit-active {
      //transform: rotateX(0.25turn);
      opacity: 0;
    }
    .rotateX-enter-active,
    .rotateX-exit-active {
      transition: all 300ms;
    }
  `,
};

const GlobalStyle = () => {
  return (
    <Global
      styles={[
        css`
          @font-face {
            font-family: 'Pretendard';
            src:
              local('Pretendard'),
              url(${Pretendard}) format('woff');
          }
          * {
            font-family: 'Pretendard';
            font-size: 16px;
            --breakpoint-sm: 576px;
            --breakpoint-md: 768px;
            --breakpoint-lg: 992px;
            --breakpoint-xl: 1200px;
            --breakpoint-xxl: 1400px;
          }
          body {
            overflow-x: hidden;
          }
        `,
        ...Object.values(animations),
      ]}
    />
  );
};

export default GlobalStyle;
