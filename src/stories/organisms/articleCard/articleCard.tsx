import * as React from 'react';
import Box from '@mui/material/Box';
import {CustomImage} from '../../atoms/customImage/customImage'

import {Typography} from '@mui/material';
import './articleCard.css'
import { ArticleQuantity } from '../../molecules/articleQuantity/articleQuantity';


export interface  ArticleCardProps {
    article:string,
    avatar:string,
    price:number,
    onChange:(e :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    handleQuantity:(e:any)=> void,
    idx:string|number,
    quantity:number
}

export const ArticleCard: React.FC< ArticleCardProps > = ({
    article,
    avatar,
    price,
    onChange,
    handleQuantity,
    quantity,
    idx
}) => {
    
  return(
     <Box className={"default-props-article-card"}>
         <Box><CustomImage avatar={avatar}/></Box>
         <Box className={"article-info"}>
             <Typography variant="h6" className={"defualt-props-typography-article"}> 
                {article}
            </Typography>
            <Typography variant="h6" className={"defualt-props-typography-price"}>
                ${price.toFixed(2)}
            </Typography>
            <ArticleQuantity onChange={onChange} handleQuantity={(id)=>handleQuantity(id)}  idx={idx} quantity={quantity}/>
         </Box>
     </Box>
  ) ;
};


