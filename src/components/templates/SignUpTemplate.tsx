/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { Theme, css } from '@emotion/react';
import Text from '../atomics/Text';
import Button from '../atomics/Button';
import ButtonGroup from '../molecules/ButtonGroup';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Card from '../molecules/Card';
import IconText from '../molecules/IconText';

interface SignUpMethod {
  name: ReactNode;
  url: string;
}

interface SignUpTemplateProps {
  signUpMethod: SignUpMethod[];
}

const SingUpTemplate = ({ signUpMethod }: SignUpTemplateProps) => {
  return (
    <div css={(theme) => signUpContainer(theme)}>
      <div css={head}>
        <IconText
          variant="primary"
          icon={<MdKeyboardArrowLeft size={24} />}
          size="xl"
          weight="lg"
          hover="toLeft"
          onClick={() => (location.href = './')}
          style={{ letterSpacing: '1px' }}
        >
          회원가입
        </IconText>
      </div>
      <Card
        variant="primary"
        height="100"
        style={{ padding: '0', margin: '0 auto', maxWidth: '350px' }}
      >
        <ButtonGroup separatorColor="transparent" vertical>
          {signUpMethod.map((method) => (
            <Button
              variant="light"
              style={{ height: '4.5rem', justifyContent: 'flex-start' }}
              boxShadow={false}
              key={method.url}
            >
              {method.name}
              <MdKeyboardArrowRight css={buttonIcon} />
            </Button>
          ))}
        </ButtonGroup>
      </Card>
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

const buttonIcon = css`
  position: absolute;
  right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
`;

const sellerContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
`;

const head = css`
  margin: 2rem 0;
`;

export default SingUpTemplate;
