import * as React from 'react';
import Box from '@mui/material/Box';
import { CustomButton } from '../../atoms/customButton/customButton';
import { CustomInput } from '../../atoms/customInput/customInput';

import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';

import './articleQuantity.css';

export interface  ArticleQuantityProps {
  onChange:(e :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  handleQuantity:(e:any)=> void,
  quantity:number,
  idx:string|number
}
export const ArticleQuantity: React.FC< ArticleQuantityProps> = ({
  onChange,
  handleQuantity,
  quantity,
  idx
}) => {
  return(
    <Box className={"default-props-article-quantity"}>
        <CustomButton id={"dec_"+idx}  variants={"icon-button minus-symbol"} onClick={()=>handleQuantity("dec")} endIcon={<HorizontalRuleIcon/>}></CustomButton>
        <CustomInput  name={"quantity"} variant={"secondaryInp"} placeholder={"1"} value={quantity} onChange={onChange}/>
        <CustomButton id={"add_"+idx}  variants={"icon-button add-symbol"} onClick={()=>handleQuantity("add")} endIcon={<AddIcon/>}></CustomButton>
    </Box>
  ) ;
};


