import React, {useRef} from "react"
import { TextField } from "@mui/material"
interface Props {
onChange: (newValue:string)=>void
}
const Input: React.FC<Props> = props => {
    const {onChange} = props
    const inputRef = useRef<HTMLInputElement>(null)
   const handleChange = () => {
onChange(inputRef.current?.value || "")
   }
    return<TextField label="Filled" variant="filled" ref={inputRef} onChange={handleChange} placeholder="title"></TextField>
}
export default Input