import React from "react";
import { ITask } from "../../../types/tasks";

type Props = {
  task: ITask;
};

const Task = ({ task }: Props) => {
  return (
    <tr key={task.id}>
      <td>{task.text}</td>
      <td>Red</td>
    </tr>
  );
};

export default Task;
