import * as React from 'react';
import { ArticleCard } from '../../organisms/articleCard/articleCard';
import { UserInfoCard } from '../../organisms/userInfoCard/userInfoCard';
import { Terms_Conditions } from '../../molecules/tems&conditions/terms_conditions';
import { CustomButton } from '../../atoms/customButton/customButton';

import {Box} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import './cartPageTemplate.css';

export interface  CartPageTemplateProps {
  articlesInfo:{
    avatar:string,
    price:number,
    article:string,
    quantity:number
  }[],
  onChange:(e :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  handleQuantity:(id:any,idx:any)=> void,
  handleCheckBox: (e: any) => void,
  handleNext:(e:any)=>void,
}

export const CartPageTemplate: React.FunctionComponent< CartPageTemplateProps> = ({
  articlesInfo,
  onChange,
  handleQuantity,
  handleNext,
  handleCheckBox
}) => {
  return(
    <Box className={"cart-page-main"}>
      <Box className={"articles-info"}>
        {articlesInfo?.map((article,idx)=>{
              return(
                <Box key={idx} className={"article-info"}>
                  <ArticleCard
                    onChange={onChange}
                    quantity={article.quantity}
                    handleQuantity={(id) => handleQuantity(id,idx)}
                    avatar={article.avatar}
                    price={article.price}
                    article={article.article} 
                    idx={idx}
                  />
                </Box>
              )
        })} 
      </Box>
      <Box className={"user-info"}>
        <UserInfoCard  onChange={onChange}/>
      </Box>
      <Box className={"terms-conditions"}>
        <Terms_Conditions handleCheckBox={handleCheckBox}/>
      </Box>
      <Box className={"next-button"}>
        <CustomButton  id={"next"} variants={"primary"} buttonStyle={{width:"281px",height:"58px"}} onClick={handleNext} endIcon={<ArrowForwardIcon/>}>
              Next</CustomButton>
      </Box>
    </Box>
  ) ;
};


