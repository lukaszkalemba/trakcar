import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import TopBar from '../TopBar';

export default {
  title: 'Layout/TopBar',
  component: TopBar,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <TopBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
