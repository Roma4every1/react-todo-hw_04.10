import { useState } from "react";
import { useTodoContext } from "../../store/context";
import form from ".";

const Form: React.FC = () => {
  const { todos, setTodos } = useTodoContext();
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default Form