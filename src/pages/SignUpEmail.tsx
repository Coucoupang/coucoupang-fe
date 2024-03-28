import React from 'react';
import TextField from '../components/molecules/TextField';

const SignUpEmail = () => {
  return (
    <>
      <TextField type="email" variant="primary" label="이메일 주소" />
    </>
  );
};

export default SignUpEmail;
