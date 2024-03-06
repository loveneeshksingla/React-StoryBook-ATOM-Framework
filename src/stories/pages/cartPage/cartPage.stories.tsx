import { Story, Meta } from '@storybook/react/types-6-0';
import CartPage, { CartPageProps } from './cartPage';

export default{
    title:'Pages/CartPage',
    component:CartPage,
} as Meta;


const article1={
    avatar:"girl-sweatshirt-2.webp",
    price:65234.00,
    article:"The North face 10088 glacier 1/4 zipsd",
    quantity:1
}
const article2={
    avatar:"girls-sweatshirts.webp",
    price:652.00,
    article:"My hovercraft is full of eels",
    quantity:1
}
const articlesInfo=[article1,article2];



const Template:Story<CartPageProps>=(args)=><CartPage {...args}></CartPage>;
export const Default = Template.bind({});

Default.args={
    articlesInfo:articlesInfo
};