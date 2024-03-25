/** @jsxImportSource @emotion/react */
import React from 'react';
import SignUpMethod from './SignUpMethod';
import { Theme, css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignUpEmail from './SignUpEmail';
import IconText from '../components/molecules/IconText';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div css={(theme) => signUpContainer(theme)}>
      <div css={head}>
        <IconText
          variant="primary"
          icon={<MdKeyboardArrowLeft size={24} />}
          size="xl"
          weight="lg"
          hover="toLeft"
          onClick={() => navigate('/')}
          style={{ letterSpacing: '1px' }}
        >
          회원가입
        </IconText>
      </div>
      {(() => {
        switch (location.state?.method) {
          case 'email':
            return <SignUpEmail />;
          default:
            return <SignUpMethod />;
        }
      })()}
    </div>
  );
};

const signUpContainer = (theme: Theme) => css`
  max-width: ${theme.breakPoints.sm};
  margin: 0 auto;
  padding: 1rem;
`;

const head = css`
  margin: 2rem 0;
`;

export default SignUp;
