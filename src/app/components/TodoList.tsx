import React from "react";
import { ITask } from "../../../types/tasks";
import Task from "@/app/components/Task";

type Props = {
  tasks: ITask[];
};

const TodoList = ({ tasks }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
