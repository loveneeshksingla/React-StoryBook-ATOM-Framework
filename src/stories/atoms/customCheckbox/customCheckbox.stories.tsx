import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomCheckbox, CustomCheckboxProps } from './customCheckbox';


export default {
    title:"Atoms/CustomCkeckbox",
    component:CustomCheckbox
} as Meta;


const Template: Story<CustomCheckboxProps> = (args) => <CustomCheckbox {...args}></CustomCheckbox>;

export const Default = Template.bind({});

Default.args={

};