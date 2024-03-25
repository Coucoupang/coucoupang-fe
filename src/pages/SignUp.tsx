import React from 'react';
import SingUpTemplate from '../components/templates/SignUpTemplate';

const SignUp = () => {
  return (
    <SingUpTemplate
      signUpMethod={[
        { name: '이메일로 가입하기', url: '/email' },
        {
          name: (
            <>
              <img
                src={require('../assets/images/oauth/google.png')}
                style={{ marginRight: '0.5rem' }}
                alt="google"
              />
              Google로 가입하기
            </>
          ),
          url: '/google',
        },
        {
          name: (
            <>
              <img
                src={require('../assets/images/oauth/kakao.png')}
                style={{ marginRight: '0.5rem' }}
                alt="google"
              />
              카카오로 가입하기
            </>
          ),
          url: '/kakao',
        },
      ]}
    />
  );
};

export default SignUp;
