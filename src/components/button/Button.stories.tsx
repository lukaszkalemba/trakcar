import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { ButtonProps } from '../Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>button</Button>
);

export const Primary = Template.bind({});
Primary.args = {};
