import { Button, TextField } from "@mui/material"

interface Props {
    editedTitle:string
    setEditedTitle:(e:any)=>void
    handleSaveClick:()=>void
    handleCancelClick:()=>void
}

export const EditItem:React.FC<Props> = props => {
    const {editedTitle, setEditedTitle, handleSaveClick,handleCancelClick } = props
    return <>
    <TextField  variant="standard"  type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <Button variant="text" onClick={handleSaveClick}>Save</Button>
          <Button variant="text" onClick={handleCancelClick}>Cancel</Button>
    </>
}