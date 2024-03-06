import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { UserInfoCard, UserInfoCardProps } from './userInfoCard';

export default{
    title:"Organisms/UserInfoCard",
    component:UserInfoCard,
} as Meta;

const Template:Story<UserInfoCardProps>=(args)=><UserInfoCard {...args}></UserInfoCard>;

export const userInfo = Template.bind({});

userInfo.args={

};