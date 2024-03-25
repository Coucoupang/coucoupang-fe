import React from 'react';
import { Global, css } from '@emotion/react';
import Pretendard from '../assets/fonts/PretendardVariable.woff2';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Pretendard';
          src:
            local('Pretendard'),
            url(${Pretendard}) format('woff');
        }
        * {
          font-family: 'Pretendard';
          font-size: 16px;
        }
        .rotateY-enter {
          opacity: 0;
          transform: rotateX(180deg);
        }
        .rotateY-exit {
          transform: rotateX(0deg);
          opacity: 1;
        }
        .rotateY-enter-active {
          transform: rotateX(0deg);
          opacity: 1;
        }
        .rotateY-exit-active {
          transform: rotateX(90deg);
          opacity: 0;
        }
        .rotateY-enter-active,
        .rotateY-exit-active {
          transition: all 300ms;
        }
      `}
    />
  );
};

export default GlobalStyle;
