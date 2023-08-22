import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: '로그인',
    color: 'blue',
  },
};

export const HoverText: Story = {
  args: {
    text: '팔로잉',
    hoverText: '팔로잉 취소',
    color: 'red',
  },
};
