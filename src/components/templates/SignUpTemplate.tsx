/** @jsxImportSource @emotion/react */
import React from 'react';
import Card from '../molecules/Card';
import { Theme, css } from '@emotion/react';
import Text from '../atomics/Text';
import Button from '../atomics/Button';
import ButtonGroup from '../molecules/ButtonGroup';

const SingUpTemplate = () => {
  return (
    <div css={(theme) => signUpContainer(theme)}>
      <Text
        variant="primary"
        size="xl"
        weight="lg"
        style={{ margin: '1.5rem 0', letterSpacing: '1px' }}
      >
        회원가입
      </Text>
      <ButtonGroup separatorColor="#ddd" vertical>
        <Button variant="secondary" style={{ padding: '1.25rem 0' }} boxShadow={false}>
          이메일로 가입하기
        </Button>
        <Button variant="secondary" style={{ padding: '1.25rem 0' }} boxShadow={false}>
          카카오로 가입하기
        </Button>
        <Button variant="secondary" style={{ padding: '1.25rem 0' }} boxShadow={false}>
          네이버로 가입하기
        </Button>
      </ButtonGroup>
      <div css={sellerContainer}>
        <Text size="md">쿠쿠팡에서 판매를 원하세요?</Text>
        <Button variant="primary">판매자 가입하기</Button>
      </div>
    </div>
  );
};

const signUpContainer = (theme: Theme) => css`
  max-width: ${theme.breakPoints.sm};
  margin: 0 auto;
  padding: 1rem;
`;

const sellerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0;
`;

export default SingUpTemplate;
