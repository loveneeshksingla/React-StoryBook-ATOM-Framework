import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Terms_Conditions, Terms_ConditionsProps } from './terms_conditions';

export default{
    title:"Molecules/Terms_Conditions",
    component:Terms_Conditions,
} as Meta;


const Template:Story<Terms_ConditionsProps>=(args)=><Terms_Conditions {...args}></Terms_Conditions>;

export const Default = Template.bind({});

Default.args={

};