import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PhoneInfo, PhoneInfoProps } from './phoneInfo';

export default{
    title:'Molecules/phoneInfo',
    component:PhoneInfo,
} as Meta;


const Template:Story<PhoneInfoProps>=(args)=><PhoneInfo {...args}></PhoneInfo>;

export const Default = Template.bind({});

Default.args={

};

