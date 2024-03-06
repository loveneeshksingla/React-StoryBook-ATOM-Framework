import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ArticleQuantity, ArticleQuantityProps } from './articleQuantity';


export default {
    title:"Molecules/ArticleQuantity",
    component:ArticleQuantity,
} as Meta;


const Template:Story<ArticleQuantityProps>=(args)=><ArticleQuantity {...args}></ArticleQuantity>

export const Primary = Template.bind({});

Primary.args={

}