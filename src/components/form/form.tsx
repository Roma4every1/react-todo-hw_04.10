import { useState } from "react";
import Button from "@mui/material/Button";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setTodosToStore } from "../../store/reducers/taskReducer/actions";
import { user } from "../../models/user";

const Form: React.FC = () => {
  const { todos } = useAppSelector((state) => state.taskReducer);
  const { users } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    const newTodo = { id: Date.now(), title, completed: false, userId: +user };
    dispatch(setTodosToStore([newTodo, ...todos]));
    setTitle("");
    setUser("");
  };
  const handleChange = (event: SelectChangeEvent) => {
    setUser(event.target.value);
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "cneter" }}
    >
      <h1
        style={{
          textAlign: "center",
        }}
      >
        TODO APP
      </h1>

      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "20%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            border: "1px solid blue",
            padding: "1rem",
          }}
        >
          <TextField
            label="Task title"
            variant="filled"
            size="small"
            fullWidth
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormControl fullWidth>
            <InputLabel>User</InputLabel>
            <Select
              sx={{ height: "3rem" }}
              value={user}
              label="User"
              onChange={handleChange}
            >
              {users.map((user: user) => (
                <MenuItem key={user.id} value={user.id}>
                  {user.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            type="submit"
            sx={{ height: "3rem" }}
            fullWidth
          >
            {" "}
            Add Todo
          </Button>
        </Box>
      </form>
    </Box>
  );
};
export default Form;
