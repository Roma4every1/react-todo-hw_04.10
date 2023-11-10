import { useState } from "react";
import { EditItem } from "./edititem";
import { todo } from "../../../models/todo";
import {Button, Checkbox, Box, Select, MenuItem, FormControl, InputLabel, TextField, SelectChangeEvent, Avatar} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setDeletedTodo, setTodosToStore } from "../../../store/reducers/taskReducer/actions";
import { user } from "../../../models/user";

interface TodoItemProps {
  todo: todo;
  onDelete: (todoId: number) => void;
  onChecked: (todoId: number) => void;
}

export const ListItem: React.FC<TodoItemProps> = ({todo, onChecked, onDelete}) => {
  const { todos } = useAppSelector((state) => state.taskReducer);
  const { users } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const user = users.find((user) => user.id === todo.userId);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [selectUser, setSelectUser] = useState<boolean>(false);
  const handleUserSelect = (event: SelectChangeEvent) => {
    const selectedUserId = +event.target.value;
    console.log(selectedUserId);
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, userId: selectedUserId };
      }
      return t;
    });

    dispatch(setTodosToStore(updatedTodos));
  };

  const setUserHandle = () => {
    setSelectUser(true);
    console.log(selectUser);
  };

  const handleCheckboxChange = () => {
    onChecked(todo.id);
  };

  const handleDeleteClick = () => {
    dispatch(setDeletedTodo(todo));
    onDelete(todo.id);
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
    dispatch(setTodosToStore(updatedTodos));
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setEditedTitle(todo.title);
  };

  return (
    <Box
      sx={{
        height: "10rem",
        maxWidth: "35%",
        display: "flex",
        border: "1px solid blue",
        padding: 2,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {editMode ? (
          <EditItem
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
            handleCancelClick={handleCancelClick}
            handleSaveClick={handleSaveClick}
          />
        ) : (
          <>
            <h4>{todo.title}</h4>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                width: "10rem",
              }}
            >
              <Button variant="outlined" onClick={handleEditClick}>
                Edit
              </Button>
              <Button variant="outlined" onClick={handleDeleteClick}>
                Delete
              </Button>
            </Box>
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Checkbox checked={todo.completed} onChange={handleCheckboxChange} />
        <FormControl fullWidth>
          {user ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Avatar>{`${user.name.split(" ")[0].charAt(0)} ${user.name
                .split(" ")[1]
                .charAt(0)}`}</Avatar>
              <Select
                sx={{ height: "3rem" }}
                value={user.id.toString()}
                label="User"
                onChange={handleUserSelect}
              >
                {users.map((user: user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          ) : !selectUser ? (
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <Avatar>✖️</Avatar>
              <Button
                onClick={setUserHandle}
                sx={{
                  color: "black",
                  border: "1px solid gray",
                  height: "3rem",
                  display: "flex",
                  justifyContent: "left",
                }}
              >
                Anonymous
              </Button>
            </Box>
          ) : (
            <Select
              sx={{ height: "3rem" }}
              value={user}
              label="User"
              onChange={handleUserSelect}
            >
              {users.map((user: user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
      </Box>
    </Box>
  );
};
