import { FC } from "react"

interface IButtonInterface {
    onClick?:()=>void;
} 

export const Button: FC<IButtonInterface> = ({onClick}) => {
    return <button onClick={onClick}> 
        Theme
    </button>

}