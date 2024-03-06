import * as React from 'react';
import { CustomMenuItem } from '../customMenuItem/customMenuItem';
import { CustomSelectProps } from './customeSelectInterface';

import Select from '@mui/material/Select';
import Box from '@mui/material/Box';


import "./customSelect.css";


export const CustomSelect: React.FC< CustomSelectProps> = ({
    autoWidth,
    width,
    height,
    menuItems,
}) => {
  return(
    <Box className={"default-properties-box"} width={width} height={height}>
        <Select 
            className={"default-properties-select"}
            autoWidth={autoWidth}
            variant={"standard"}
        >
            {menuItems?.map((item,idx) => <CustomMenuItem item={item} key={idx} /> )}   
        </Select>
    </Box>
  ) ;
};


