/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import SignUpMethod from './SignUpMethod';
import { css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignUpEmail from './SignUpEmail';
import IconText from '../components/molecules/IconText';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import Text from '../components/atomics/Text';
import TransitionAnimation from '../components/atomics/TransitionAnimation';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <div css={signUpContainer}>
      <div css={head}>
        <IconText
          variant="primary"
          icon={<MdKeyboardArrowLeft size={24} />}
          size="xl"
          weight="lg"
          hover="toLeft"
          onClick={() => navigate(-1)}
          style={{ letterSpacing: '1px' }}
        >
          <Text
            ref={titleRef}
            variant="primary"
            size="lg"
            weight="xl"
            style={{ display: 'inline', marginLeft: '0.375rem' }}
          >
            {(() => {
              switch (location.state?.method) {
                case 'email':
                  return '회원가입';
                case 'google':
                  return '구글';
                case 'kakao':
                  return '카카오';
                default:
                  return '회원가입';
              }
            })()}
          </Text>
        </IconText>
      </div>
      <TransitionAnimation data-key={location.state?.method || ''} classNames="toRight">
        <SignUpEmail key="email" />
        <SignUpMethod key="" />
      </TransitionAnimation>
    </div>
  );
};

const signUpContainer = () => css`
  max-width: var(--breakpoint-sm);
  margin: 0 auto;
  padding: 1rem;
`;

const head = css`
  margin: 2rem 0;
`;

export default SignUp;
