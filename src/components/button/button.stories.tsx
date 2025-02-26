import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    size: 'medium',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    variant: {
      control: 'select',
    },
    size: {
      control: 'radio',
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};
