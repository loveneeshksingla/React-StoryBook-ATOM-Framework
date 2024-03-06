import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomSelect } from './customSelect';
import { CustomSelectProps } from './customeSelectInterface';
import "./customSelect.css";

export default{
    title:"Atoms/CustomSelect",
    component:CustomSelect,
} as Meta;


const PrimaryTemplate:Story<CustomSelectProps>=(args)=><CustomSelect {...args}/>;

export const Primary = PrimaryTemplate.bind({});

Primary.args={
    width:"118px",
    height:"48px",
    menuItems:[{item:"+91",flagCode:"IN"},{item:"+01",flagCode:"CA"}]
}