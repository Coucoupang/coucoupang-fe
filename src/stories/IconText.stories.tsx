import type { Meta, StoryObj } from '@storybook/react';
import IconText from '../components/molecules/IconText';
import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'molecules/IconText',
  component: IconText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    icon: <MdKeyboardArrowLeft size={24} />,
    children: 'IconText',
    onClick: () => {
      alert('IconText');
    },
  },
};
