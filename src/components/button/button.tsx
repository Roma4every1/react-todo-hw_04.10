import { useTodoContext } from "../../store/context";
import { Button, Box } from "@mui/material";

const DeletedTodoButton: React.FC = () => {
  const { deletedTodo, setDeletedTodo, setTodos, todos } = useTodoContext();

  const handleRestoreClick = () => {
    setTodos([deletedTodo!,...todos]);
    setDeletedTodo(null);
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