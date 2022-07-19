import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  OgnButton   from './OgnButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'OrangeReactLibrary/OgnButton',
  component: OgnButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof OgnButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OgnButton> = (args) => <OgnButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: 'Orange Guinee React Js UI FrameWork',
};

export const clickMe = Template.bind({});
clickMe.args = {
  label: 'clickMe',
};

 