import { ITask } from "../../types/tasks";

const baseUrl = "http://localhost:8000/";
const taskApi = `${baseUrl}tasks`;

export const getAllTodos = async (): Promise<ITask[]> => {
  const res = await fetch(taskApi);
  const todos = await res.json();
  return todos;
};
