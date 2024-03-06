import * as React from 'react';
import Input from '@mui/material/Input';
import './customInput.css'
import { CustomInputProps } from './customInputInterface';

export const CustomInput: React.FC< CustomInputProps> = ({
    placeholder,
    width,
    variant,
    onChange,
    name,
    value,
    ...props
}) => {
  return(
    <Input disableUnderline 
      name={name}
      className={`default-properties-input ${variant}`}
      style={{width}}
      placeholder={placeholder} 
      inputProps={variant==="secondaryInp" ? {style:{textAlign:"center"}}:{}}
      onChange={onChange}
      {...props}
      value={value}
    />
  );
};


