/** @jsxImportSource @emotion/react */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import { css } from '@emotion/react';

const Main = () => {
  const navigate = useNavigate();
  return (
    <Button variant="primary" onClick={() => navigate('signup')}>
      회원가입
    </Button>
  );
};

export default Main;
