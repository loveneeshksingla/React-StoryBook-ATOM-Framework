import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { CartPageTemplate, CartPageTemplateProps } from './cartPageTemplate';

export default {
    tilte:'Templates/CartPage',
    component:CartPageTemplate,
} as Meta;

let avatar1:string="girls-sweatshirts.webp";
let price1:number=652.00;
let article1:string="My hovercraft is full of eels";
let avatar:string="girl-sweatshirt-2.webp";
let price:number=65234.00;
let article:string="The North face 10088 glacier 1/4 zipsd";
let quantity:number=1;
const articlesInfo=[{avatar,price,article,quantity},{avatar:avatar1,price:price1,article:article1,quantity}];


const Template:Story<CartPageTemplateProps> = (args) => <CartPageTemplate {...args}></CartPageTemplate>;

export const Default = Template.bind({});

Default.args={
    articlesInfo:articlesInfo,
};