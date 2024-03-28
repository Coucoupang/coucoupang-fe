/** @jsxImportSource @emotion/react */
import React from 'react';
import TextField from '../components/molecules/TextField';
import { css } from '@emotion/react';

const SignUpEmail = () => {
  return (
    <div css={textContainer}>
      <TextField type="email" variant="primary" label="이메일 주소" />
      <TextField type="text" variant="primary" label="아이디" />
      <TextField type="password" variant="primary" label="비밀번호" />
    </div>
  );
};

const textContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default SignUpEmail;
