import React from 'react';
import { Global, css } from '@emotion/react';
import Pretendard from '../assets/fonts/PretendardVariable.woff2';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Pretendard';
          src: local('Pretendard'), url(${Pretendard}) format('woff');
        }
        * {
          font-family: 'Pretendard';
          font-size: 16px;
        }
      `}
    />
  );
};

export default GlobalStyle;
