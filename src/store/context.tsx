import { createContext, useContext, useState, PropsWithChildren, useEffect } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoContextProps {
  todos: Todo[];
  activeTodoId: number | null;
  deletedTodo: Todo | null;
  setTodos: (todos:Todo[])=>void;
  setActiveTodoId: (id: number | null) => void;
  setDeletedTodo: (todo: Todo | null) => void;
}

const TodoContext = createContext<TodoContextProps>({
  todos: [],
  activeTodoId: null,
  deletedTodo: null,
  setTodos:()=>{},
  setActiveTodoId: () => {},
  setDeletedTodo: () => {},
});

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider: React.FC<PropsWithChildren> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [activeTodoId, setActiveTodoId] = useState<number | null>(null);
  const [deletedTodo, setDeletedTodo] = useState<Todo | null>(null);
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      setTodos(data);
    };

    fetchTodos();
  }, []);


  return (
    <TodoContext.Provider
      value={{ todos, activeTodoId, deletedTodo, setActiveTodoId, setDeletedTodo, setTodos }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
