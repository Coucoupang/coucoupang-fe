import React from 'react';
import SingUpMethodTemplate from '../components/templates/SignUpMethodTemplate';

const SignUpMethod = () => {
  return (
    <SingUpMethodTemplate
      signUpMethod={[
        { name: '이메일로 가입하기', method: 'email' },
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
          method: 'google',
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
          method: 'kakao',
        },
      ]}
    />
  );
};

export default SignUpMethod;
