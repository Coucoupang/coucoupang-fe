import type { Meta, StoryObj } from '@storybook/react';
import Select from '../components/molecules/Select';
import Text from '../components/atomics/Text';
import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';

const meta = {
  title: 'molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: (
      <>
        <Text size="md">카테고리1</Text>
        <MdArrowDropDown size={16} />
      </>
    ),
  },
};
