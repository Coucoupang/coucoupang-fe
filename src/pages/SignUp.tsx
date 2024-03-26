/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import SignUpMethod from './SignUpMethod';
import { Theme, css } from '@emotion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import SignUpEmail from './SignUpEmail';
import IconText from '../components/molecules/IconText';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Text from '../components/atomics/Text';

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const titleRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  console.log(location.state?.method);

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
          <SwitchTransition>
            <CSSTransition
              key={location.state?.method}
              nodeRef={titleRef}
              timeout={300}
              classNames="rotateX"
              unmountOnExit
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
            </CSSTransition>
          </SwitchTransition>
        </IconText>
      </div>
      <SwitchTransition>
        <CSSTransition
          key={location.state?.method}
          nodeRef={bodyRef}
          timeout={300}
          classNames="toRight"
          unmountOnExit
        >
          <div ref={bodyRef}>
            {(() => {
              switch (location.state?.method) {
                case 'email':
                  return <SignUpEmail />;
                default:
                  return <SignUpMethod />;
              }
            })()}
          </div>
        </CSSTransition>
      </SwitchTransition>
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
