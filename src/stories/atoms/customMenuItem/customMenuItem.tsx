import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';


import ReactCountryFlag from "react-country-flag"

import './customMenuItem.css';

interface  CustomMenuItemProps {
    item:{item?:string, flagCode?:string},
}

export const CustomMenuItem: React.FunctionComponent< CustomMenuItemProps> = ({item}) => {
  return (
    <MenuItem
        className={"default-properties"}
    ><ReactCountryFlag countryCode={item?.flagCode+""}/>&nbsp;&nbsp;{item.item}</MenuItem>
  );
};


