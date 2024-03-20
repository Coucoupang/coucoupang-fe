/** @jsxImportSource @emotion/react */
import React from 'react';
import Card from '../molecules/Card';
import { Theme, css } from '@emotion/react';
import Text from '../atomics/Text';
import Button from '../atomics/Button';

const SingUpTemplate = () => {
  return (
    <div css={(theme) => signUpContainer(theme)}>
      <Text variant="primary" size="xl" weight="lg">
        회원가입
      </Text>
      <div></div>
      <Button variant="primary">일반 회원가입</Button>
      <Button variant="secondary">판매 회원가입</Button>
    </div>
  );
};

const signUpContainer = (theme: Theme) => css`
  max-width: ${theme.breakPoints.sm};
  margin: 0 auto;
  padding: 1rem;
`;

export default SingUpTemplate;
