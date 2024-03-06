export interface  CustomInputProps {
    placeholder:string,
    onChange?:(e:React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    width?:string,
    variant:string,
    name:string,
    value?: string | number,
}