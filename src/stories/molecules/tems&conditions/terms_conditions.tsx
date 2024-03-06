import * as React from 'react';
import {Box} from '@mui/material';
import { CustomCheckbox } from '../../atoms/customCheckbox/customCheckbox';

import {Typography} from '@mui/material';

import './terms_conditions.css';

export interface  Terms_ConditionsProps {
  handleCheckBox: (e: any) => void
}

export const Terms_Conditions: React.FunctionComponent<Terms_ConditionsProps> = ({
  handleCheckBox
}) => {
  return(
    <Box className={"default-props-terms-conditions"}>
        <CustomCheckbox  handleCheckBox={handleCheckBox}/>
        <Box style={{width:"225px"}}>
            <Typography>By continuing I am accepting</Typography>
            <Typography style={{textDecoration:"underline"}}>terms and conditions.</Typography>
        </Box>
    </Box>
  );
};


