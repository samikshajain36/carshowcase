import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string,
    customStyle:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?:"button" | "submit"
}
export interface ManufacturerProps{
    manufacturer:string;
    setManufacturer:(Manufacturer:string) => void;
}