import React, {useState, BaseSyntheticEvent} from "react"
interface Props {
onChange: (newValue:string)=>void
}
const Input: React.FC<Props> = props => {
    const {onChange} = props
    const [value, setValue] = useState<string>("")
   const handleChange = (event:BaseSyntheticEvent) => {
setValue(event.target.value)
onChange(event.target.value)

   }
    return<input value={value} onChange={handleChange} placeholder="title"></input>
}
export default Input