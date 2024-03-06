import * as React from 'react';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';
import { CustomInput } from '../../atoms/customInput/customInput';


import './userInfoCard.css';
import { PhoneInfo } from '../../molecules/phoneInfo/phoneInfo';

export interface  UserInfoCardProps {
  onChange:(e :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
}

const menuItems=[{item:"+91",flagCode:"IN"},{item:"+01",flagCode:"CA"}]
export const UserInfoCard: React.FC< UserInfoCardProps> = ({
  onChange,
}) => {
  return(
      <Box className={"user-info-card"}>
          <Box className={"name-info"}>
            <Typography id="name-title">Your contact details:</Typography>
            <CustomInput name={"userName"} placeholder={"Your Name*"} width={"279px"} variant={"primaryInp"} onChange={onChange }/>
          </Box>
        
          <Box className={"phone-info-primary"}>
            <PhoneInfo menuItems={menuItems} onChange={onChange}/>
            <Typography>*mandatory</Typography>
          </Box>

          <Box className={"email-info"}>
            <Typography id="email-title">Please let us know your email to recieve order updates:</Typography>
            <CustomInput name={"email"}  placeholder={"email"} width={"281px"} variant={"primaryInp"} onChange={onChange}/>
          </Box>
      </Box>
  ) ;
};


