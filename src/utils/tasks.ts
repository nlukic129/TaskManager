import { ITask, taskStatus } from "../store/TaskSlice";

export const parseTasks = (tasks: ITask[]) => {
  const done: ITask[] = [];
  const inProgress: ITask[] = [];

  tasks.forEach((task) => {
    if (task.status === taskStatus.DONE) {
      done.push(task);
    } else {
      inProgress.push(task);
    }
  });

  return [done, inProgress];
};

export const fetchTasks = async () => {
  const response = await fetch("/tasks.json");
  return await response.json();
};
