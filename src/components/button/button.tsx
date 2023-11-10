import { Button, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { setDeletedTodo, setTodosToStore } from "../../store/reducers/taskReducer/actions";

const DeletedTodoButton: React.FC = () => {
const {todos, deletedTodo} = useAppSelector(state=>state.taskReducer)
const dispatch = useAppDispatch()
  const handleRestoreClick = () => {
    dispatch(setTodosToStore([deletedTodo!,...todos]));
    dispatch(setDeletedTodo(null));
  };

  return (<Box sx={{display:'flex',
  justifyContent:'center', 
  marginTop:2,
  height:50}}>
    <Button variant="outlined" onClick={handleRestoreClick} disabled={!deletedTodo}>
      Restore Deleted Todo
    </Button></Box>
  );
};
export default DeletedTodoButton