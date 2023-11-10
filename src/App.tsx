import { useEffect } from "react";
import Form from "./components/form/form";
import List from "./components/list/list";
import DeletedTodoButton from "./components/button/button";
import { useAppDispatch, useAppSelector } from "./store/store";
import { getTodosDataAction } from "./store/reducers/taskReducer/actions";
import { getUsersDataAction } from "./store/reducers/userReducer/actions";

const App: React.FC = () => {
  const dispatch=useAppDispatch()
  useEffect(() => {
    dispatch(getUsersDataAction())
  dispatch(getTodosDataAction())
  }, []);
const {users} = useAppSelector(state=>state.userReducer)
console.log(users)
  return (  <>
      <Form />
      <DeletedTodoButton />
      <List /></>  
  );
};

export default App;