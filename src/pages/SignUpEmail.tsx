/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import TextField from '../components/molecules/TextField';
import { Theme, css } from '@emotion/react';
import Lottie from 'react-lottie';
import * as Pencil from '../assets/lotties/pencil.json';
import Button from '../components/atomics/Button';

const progressCss = (value: number) => css`
  position: fixed;
  top: 0;
  left: 0;

  width: ${value * 100}%;
  height: 0.25rem;

  background-color: red;

  transition: all 500ms ease;
`;

const formContainer = css`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;

  > * {
    width: 100%;
  }
`;

const emailContainer = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: ${theme.breakPoint.sm}) {
    flex-direction: column;
  }
`;

const signUpCss = (theme: Theme) => css`
  width: 8rem;
  @media (max-width: ${theme.breakPoint.sm}) {
    width: 100%;
  }
`;

const SignUpEmail = () => {
  const [progress, setProgress] = useState<number>(0);
  return (
    <div>
      <div css={() => progressCss(progress)}></div>
      <Lottie width={80} height={80} options={{ animationData: Pencil }} isClickToPauseDisabled />
      <div css={formContainer}>
        <TextField
          type="text"
          variant="primary"
          label="아이디"
          onFocus={() => setProgress(1 / 4)}
        />
        <TextField
          type="password"
          variant="primary"
          label="비밀번호"
          onFocus={() => setProgress(2 / 4)}
        />
        <div css={(theme) => emailContainer(theme)}>
          <div
            css={css`
              flex: 1 1 auto;
            `}
          >
            <TextField
              type="email"
              variant="primary"
              label="이메일 주소"
              onFocus={() => setProgress(3 / 4)}
            />
          </div>
          <Button variant="secondary" boxShadow={false}>
            이메일 인증하기
          </Button>
        </div>
        <TextField type="text" variant="primary" label="닉네임" onFocus={() => setProgress(1)} />
        <Button variant="primary" css={(theme) => signUpCss(theme)} boxShadow={false}>
          가입하기
        </Button>
      </div>
    </div>
  );
};

export default SignUpEmail;
