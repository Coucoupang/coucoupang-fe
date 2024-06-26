import type { Meta, StoryObj } from '@storybook/react';
import Button from '../components/common/Button';
import ButtonGroup from '../components/common/ButtonGroup';
import React from 'react';

const meta = {
  title: 'molecules/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Button variant="secondary">Button1</Button>
        <Button variant="secondary">Button2</Button>
        <Button variant="secondary">Button3</Button>
        <Button variant="secondary">Button4</Button>
      </>
    ),
  },
};
