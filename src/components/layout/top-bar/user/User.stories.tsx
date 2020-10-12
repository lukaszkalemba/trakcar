import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import User from './User';

export default {
  title: 'Layout/User',
  component: User,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <User {...args} />;

export const Default = Template.bind({});
Default.args = {};
