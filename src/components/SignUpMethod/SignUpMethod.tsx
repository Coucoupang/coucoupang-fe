/** @jsxImportSource @emotion/react */
import React, { ReactNode } from 'react';
import { css } from '@emotion/react';
import Text from '../common/Text';
import Button from '../common/Button';
import ButtonGroup from '../common/ButtonGroup';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Card from '../common/Card';
import { useNavigate } from 'react-router-dom';

interface SignUpMethod {
  name: ReactNode;
  method: string;
}

interface SignUpMethodProps {
  signUpMethod: SignUpMethod[];
}

const SingUpMethod = ({ signUpMethod }: SignUpMethodProps) => {
  const navigate = useNavigate();

  return (
    <div>
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
              key={method.method}
              onClick={() => navigate('/signup', { state: { method: method.method } })}
            >
              {method.name}
              <MdKeyboardArrowRight css={buttonIcon} />
            </Button>
          ))}
        </ButtonGroup>
      </Card>
      <div css={sellerContainer}>
        <Text
          size="md"
          css={css`
            padding-right: 1rem;
          `}
        >
          쿠쿠팡에서 판매를 원하세요?
        </Text>
        <Button variant="primary">판매자 가입하기</Button>
      </div>
    </div>
  );
};

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

export default SingUpMethod;
