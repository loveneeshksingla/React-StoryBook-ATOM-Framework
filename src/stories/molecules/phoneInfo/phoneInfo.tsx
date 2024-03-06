import * as React from 'react';
import { CustomInput } from '../../atoms/customInput/customInput';
import { CustomSelect } from '../../atoms/customSelect/customSelect';

import Box from '@mui/material/Box';


import './phoneInfo.css';

export interface  PhoneInfoProps {
  menuItems:{item:string,flagCode?:string}[],
  onChange:(e :React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  phoneNo?:number,
}

export const PhoneInfo: React.FC< PhoneInfoProps> = ({
  onChange,
  menuItems,
  phoneNo
}) => {
  return (
    <Box className={"phone-info-main"}>
        <CustomSelect menuItems={menuItems}/>
        <CustomInput name={"phoneNo"} value={phoneNo} placeholder={"Phone Number*"} width={"153px"} variant={"primaryInp"} onChange={onChange}/>
    </Box>
  );
};


