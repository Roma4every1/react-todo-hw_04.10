import { useTodoContext } from "../../../store/context";
import { useState } from "react";
import { EditItem } from "./edititem";
import { todo } from "../../../models/todo";
import { Button, Checkbox, Box } from "@mui/material";



interface TodoItemProps {
  todo:todo
  onDelete:(todoId:number)=>void
  onChecked:(todoId:number)=>void
}

export const ListItem: React.FC<TodoItemProps> = ({ todo, onChecked, onDelete }) => {
  const {todos, setDeletedTodo, setTodos } = useTodoContext();
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleCheckboxChange = () => {

  onChecked(todo.id)

  };

  const handleDeleteClick = () => {
    setDeletedTodo(todo);
   onDelete(todo.id) 
  };
  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, title: editedTitle };
      }
      return t;
    });
    setTodos(updatedTodos);
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedTitle(todo.title);
  };

  return <Box
  sx={{
    width: 500,
    height: 70,
    display: 'flex',
alignItems:'center',
gap:1,
border: "1px solid blue",
padding:1

  }}
>
      <Checkbox checked={todo.completed} onChange={handleCheckboxChange} />
      {editMode ? (
       <EditItem editedTitle={editedTitle} setEditedTitle={setEditedTitle}
        handleCancelClick={handleCancelClick} handleSaveClick={handleSaveClick}/>
      ) : (
        <>
      <span>{todo.title}</span>
      <Button variant="outlined" onClick={handleEditClick}>Edit</Button>
      <Button variant="outlined" onClick={handleDeleteClick}>Delete</Button>
    </>
  )}
  </Box>
};
