import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { CustomImageProps } from './customImageInterface';
import './customImage.css'


export const CustomImage: React.FunctionComponent< CustomImageProps> = ({
   avatar
}) => {
  return(
    <Avatar
      className={"default-properties-avatar"}
      src={avatar}
    />
  ) ;
};

