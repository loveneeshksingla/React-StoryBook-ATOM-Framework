import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {CustomButton} from './customButton'
import { CustomButtonProps } from './customButtonInterface';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AddIcon from '@mui/icons-material/Add';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
export default {
    title: 'Atoms/CustomButton',
    component: CustomButton,
    // argTypes: {
    //   backgroundColor: { control: 'color' },
    //   color:{ control: 'color' }
    // },
  } as Meta;

// const DefaultTemplate: Story<CustomButtonProps> =(args) => <CustomButton {...args}>Button</CustomButton>;
// export const Default = DefaultTemplate.bind({});
// Default.args = {
  
// };

const PrimaryTemplate: Story<CustomButtonProps> =(args) => <CustomButton {...args}>Next</CustomButton>;
export const Primary = PrimaryTemplate.bind({});
Primary.args = {
    variants:"primary",
    endIcon:<ArrowForwardIcon />,
    buttonStyle:{width:'281px',height:'58px'},
};

const MinusIconTemplateTransparent: Story<CustomButtonProps> =(args) => <CustomButton {...args}></CustomButton>;
export const MiunsButton = MinusIconTemplateTransparent.bind({});
MiunsButton.args = {
    variants:"icon-button minus-symbol",
    endIcon:<HorizontalRuleIcon/>
};

const PlusIconTemplate: Story<CustomButtonProps> =(args) => <CustomButton {...args}></CustomButton>;
export const AddButton = PlusIconTemplate.bind({});
AddButton.args = {
    variants:"icon-button add-symbol",
    endIcon:<AddIcon/>
};

// const PlusIconTemplate: Story<CustomButtonProps> =(args) => <CustomButton {...args}><AddCircleIcon/></CustomButton>;
// export const PlusButton = PlusIconTemplate.bind({});
// PlusButton.args = {
//     variants:"icon-button",
// };

// const MinusIconTemplateFilled: Story<CustomButtonProps> =(args) => <CustomButton {...args}><RemoveCircleIcon/></CustomButton>;
// export const MiunsButtonFilled = MinusIconTemplateFilled.bind({});
// MiunsButtonFilled.args = {
//     variants:"icon-button",
// };
 