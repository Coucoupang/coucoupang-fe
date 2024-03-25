import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '../components/atomics/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'atomics/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
    disabled: false,
  },
};
/*
export const Secondary: Story = {
  args: {
    //label: 'Button',
  },
};

export const Large: Story = {
  args: {
    //size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    //size: 'small',
    label: 'Button',
  },
};
*/
