import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CustomImage } from './customImage';
import { CustomImageProps } from './customImageInterface';


export default {
    title:"Atoms/CustomImage",
    compinent:CustomImage,
} as Meta;

const Template:Story<CustomImageProps> = (args)=> <CustomImage {...args}/>

export const Primary = Template.bind({});
Primary.args={
    avatar:"waterdrop.jpeg",
};