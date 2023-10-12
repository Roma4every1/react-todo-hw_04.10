import { useTodoContext } from "../../store/context";

const DeletedTodoButton: React.FC = () => {
  const { deletedTodo, setDeletedTodo, setTodos, todos } = useTodoContext();

  const handleRestoreClick = () => {
    setTodos([deletedTodo!,...todos]);
    setDeletedTodo(null);
  };

  return (
    <button onClick={handleRestoreClick} disabled={!deletedTodo}>
      Restore Deleted Todo
    </button>
  );
};
export default DeletedTodoButton