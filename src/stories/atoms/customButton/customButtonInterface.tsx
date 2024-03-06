export interface CustomButtonProps{
    onClick?:(e:any)=> void,
    disabled?:boolean,
    variants?:string,
    buttonStyle?:{width:string, height:string},
    id:string,
    endIcon?: React.ReactNode
}