import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ArticleCard, ArticleCardProps } from './articleCard';

export default{
    title:"Organisms/ArticleCard",
    component:ArticleCard,
} as Meta;


const Template:Story<ArticleCardProps>=(args)=><ArticleCard {...args}/>

export const Card = Template.bind({});

Card.args={
    avatar:"waterdrop.jpeg",
    price:652.00,
    article:"The North face 10088 glacier 1/4 zipsd"  
}