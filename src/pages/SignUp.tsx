/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import SignUpMethod from './SignUpMethod';
import { Theme, css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignUpEmail from './SignUpEmail';
import IconText from '../components/SignUp/IconText';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import TransitionAnimation from '../components/common/TransitionAnimation';
import Text from '../components/common/Text';

const signUpContainer = css`
  position: relative;

  max-width: var(--breakpoint-sm);
  margin: 0 auto;
`;

const head = (theme: Theme) => css`
  margin-top: 2rem;
  padding: 1rem 1rem 0 1rem;

  @media (max-width: ${theme.breakPoint.md}) {
    margin-top: 1rem !important;
  }
`;

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <div css={signUpContainer}>
      <div css={(theme) => head(theme)}>
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
      <TransitionAnimation
        data-key={location.state?.method || ''}
        className="popup"
        wrapperCss={css`
          padding: 2rem;
        `}
      >
        <SignUpEmail key="email" />
        <SignUpMethod key="" />
      </TransitionAnimation>
    </div>
  );
};

export default SignUp;
