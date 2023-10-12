import { useTodoContext } from "../../store/context";
import {ListItem} from "./item/listItem";

const List: React.FC = () => {
  const { todos, setTodos } = useTodoContext();
  const handleCheked = (todoId: number) => {
    setTodos(todos.map((item) => {
      if (item.id === todoId) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }));
  }
const handleDelete=(todoId:number)=>{ setTodos(todos.filter(item=> item.id!==todoId))}
  return (
    <ul>
      {todos.map((todo) => (
        <ListItem key={todo.id} todo={todo} onChecked={handleCheked} onDelete={handleDelete} />
      ))}
    </ul>
  );
};
export default List
