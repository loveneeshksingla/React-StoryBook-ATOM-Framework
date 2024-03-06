import * as React from 'react';
import { Checkbox } from '@mui/material';


export interface CustomCheckboxProps {
  handleCheckBox: (e: any) => void
}

export const CustomCheckbox: React.FunctionComponent<CustomCheckboxProps> = ({
  handleCheckBox
}) => {
  return (
    <Checkbox sx={{
      color: "#96A7AF",
      '&.Mui-checked':
      {
        color: "#96A7AF"
      }
    }}
    onChange={ handleCheckBox }
    />
  );
};


