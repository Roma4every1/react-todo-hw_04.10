import { setTodosToStore } from "../../store/reducers/taskReducer/actions";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { ListItem } from "./item/listItem";

const List: React.FC = () => {
  const { todos } = useAppSelector((state) => state.taskReducer);
  const dispatch = useAppDispatch();
  const handleCheked = (todoId: number) => {
    dispatch(
      setTodosToStore(
        todos.map((item) => {
          if (item.id === todoId) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        })
      )
    );
  };
  const handleDelete = (todoId: number) => {
    dispatch(setTodosToStore(todos.filter((item) => item.id !== todoId)));
  };
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          todo={{
            completed: todo.completed,
            id: todo.id,
            title: todo.title,
            userId: todo.userId,
          }}
          onChecked={handleCheked}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
export default List;
