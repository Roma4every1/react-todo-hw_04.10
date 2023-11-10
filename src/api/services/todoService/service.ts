import { todo } from "../../../models/todo";

export const getTodos = async (): Promise<todo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  return data.map((dataItem: todo) => ({
    title: dataItem.title,
    id: dataItem.id,
    completed: dataItem.completed,
    userId: dataItem.userId,
  }));
};
