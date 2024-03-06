import * as React from 'react';
import { CartPageTemplate } from '../../templates/cartPageTemplate/cartPageTemplate';

import {Box} from '@mui/material';

import './cartPage.css';

export interface  CartPageProps {
    articlesInfo:{
        avatar:string,
        price:number,
        article:string,
        quantity:number
    }[],
    onChange:(e :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    onClick?:(e:any)=> void,
    handleQuantity:(id:any,idx:any)=> void,
    handleNext:(e:any)=>void,
    handleCheckBox: (e: any) => void
}

const CartPage: React.FunctionComponent< CartPageProps> = ({
    articlesInfo,
    onChange,
    handleQuantity,
    handleNext,
    handleCheckBox
}) => {
  return(
    <Box className={"cart-page"}>
        <CartPageTemplate
            articlesInfo={articlesInfo}
            onChange={onChange}
            handleCheckBox={handleCheckBox}
            handleNext={handleNext}
            handleQuantity={(id,idx)=>handleQuantity(id,idx)}
        >
         </CartPageTemplate>
    </Box>
  ) ;
};

export default CartPage;
