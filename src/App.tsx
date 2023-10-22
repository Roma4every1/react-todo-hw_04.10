import { useEffect } from "react";
import { TodoProvider, useTodoContext } from "./store/context";
import Form from "./components/form+useRef/form";
import List from "./components/list/list";
import DeletedTodoButton from "./components/button/button";

const App: React.FC = () => {

  return (
    <TodoProvider>
      
      <Form />
      <DeletedTodoButton />
      <List />
    </TodoProvider>
  );
};

export default App;