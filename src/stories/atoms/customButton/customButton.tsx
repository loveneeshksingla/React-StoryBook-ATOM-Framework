
import React from 'react';
import Button from '@mui/material/Button';
import './customButton.css'
import { CustomButtonProps } from './customButtonInterface';

export const CustomButton: React.FC<CustomButtonProps> = ({
    variants,
    buttonStyle,
    children,
    onClick,
    id,
    ...props
}) => {
  return (
      <Button 
        id={id}
        className={variants}
        style={{...buttonStyle}}
        onClick={onClick}
        {...props}
      >
        {children}
      </Button>
  );
};


