import type { Meta, StoryObj } from '@storybook/react';
import Placeholder from '../components/atomics/Placeholder';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'atomics/Placeholder',
  component: Placeholder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Placeholder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Placeholder',
  },
};
