import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate('signup')}>회원가입</button>;
};

export default Main;
