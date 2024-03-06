import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomInput } from './customInput';
import { CustomInputProps } from './customInputInterface';

export default {
    title:'Atoms/CustomInput',
    component:CustomInput,
} as Meta;


const PrimaryTemplate: Story <CustomInputProps> = (args) => <CustomInput   {...args}/>;
export const Primary = PrimaryTemplate.bind({});
Primary.args={
    placeholder:"Your Name",
    width:"279px",
    variant:"primaryInp",
};

const SecondaryTemplate: Story <CustomInputProps> = (args) => <CustomInput   {...args}/>;
export const Secondary = SecondaryTemplate.bind({});
Secondary.args={
    placeholder:"1",
    variant:"secondaryInp",
};