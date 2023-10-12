import { useTodoContext } from "../../../store/context";
import { useState } from "react";
import { EditItem } from "./edititem";
import { todo } from "../../../models/todo";

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

  return <li>
      <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />
      {editMode ? (
       <EditItem editedTitle={editedTitle} setEditedTitle={setEditedTitle}
        handleCancelClick={handleCancelClick} handleSaveClick={handleSaveClick}/>
      ) : (
        <>
      <span>{todo.title}</span>
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </>
  )}
  </li>
};
