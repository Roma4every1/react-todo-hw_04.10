interface Props {
    editedTitle:string
    setEditedTitle:(e:any)=>void
    handleSaveClick:()=>void
    handleCancelClick:()=>void
}

export const EditItem:React.FC<Props> = props => {
    const {editedTitle, setEditedTitle, handleSaveClick,handleCancelClick } = props
    return <>
    <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
    </>
}