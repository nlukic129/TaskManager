import { createSlice } from "@reduxjs/toolkit";
import { parseTasks } from "../utils/tasks";

export enum taskStatus {
  DONE = "DONE",
  PROGRESS = "PROGRESS",
}

export interface ITask {
  id: number;
  title: string;
  description: string;
  status: taskStatus;
  responsiblePerson: string;
}

export interface TaskState {
  statusFilter: taskStatus[];
  searchPerson: string;
  tasks: {
    [taskStatus.DONE]: ITask[];
    [taskStatus.PROGRESS]: ITask[];
  };
}

const initialState: TaskState = {
  tasks: {
    [taskStatus.DONE]: [],
    [taskStatus.PROGRESS]: [],
  },
  statusFilter: [taskStatus.PROGRESS, taskStatus.DONE],
  searchPerson: "",
};

const taskSlice = createSlice({
  name: "taskManager",
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      const status = action.payload;
      const statusIndex = state.statusFilter.indexOf(status);
      const statusFilter = state.statusFilter;
      if (statusIndex !== -1) {
        statusFilter.splice(statusIndex, 1);
      } else {
        statusFilter.push(status);
      }
      statusFilter.sort((a, b) => {
        if (a === taskStatus.PROGRESS && b === taskStatus.DONE) {
          return -1;
        } else if (a === taskStatus.DONE && b === taskStatus.PROGRESS) {
          return 1;
        } else {
          return 0;
        }
      });
      state.statusFilter = [...statusFilter];
    },
    setSearchFilter: (state, action) => {
      state.searchPerson = action.payload;
    },
    setTasks: (state, action) => {
      const tasks = action.payload;
      const [parsedDoneTasks, parsedInProgressTasks] = parseTasks(tasks);

      state.tasks[taskStatus.DONE] = parsedDoneTasks;
      state.tasks[taskStatus.PROGRESS] = parsedInProgressTasks;
    },
    changeTaskStatus: (state, action) => {
      const newTask = { ...action.payload.task };
      const taskStatus: taskStatus = newTask.status;
      const destinationStatus: taskStatus = action.payload.status;
      const destinationElementIndex = action.payload.destinationElementIndex || state.tasks[destinationStatus].length - 1;
      const index = state.tasks[destinationStatus].findIndex((task) => task.id === destinationElementIndex);

      newTask.status = destinationStatus;
      state.tasks[taskStatus] = state.tasks[taskStatus].filter((task) => task.id !== newTask.id);
      state.tasks[destinationStatus].splice(index, 0, newTask);
    },
    addTask: (state, action) => {
      const newTask = action.payload;
      state.tasks[taskStatus.PROGRESS].unshift(newTask);
    },
    deleteTask: (state, action) => {
      const { id, status }: { id: number; status: taskStatus } = action.payload;
      state.tasks[status] = state.tasks[status].filter((task) => task.id !== id);
    },
    editTask: (state, action) => {
      const { id, status, title, description, responsiblePerson }: ITask = action.payload;
      const taskIndex = state.tasks[status].findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state.tasks[status][taskIndex].title = title;
        state.tasks[status][taskIndex].description = description;
        state.tasks[status][taskIndex].responsiblePerson = responsiblePerson;
      }
    },
  },
});

export const { setStatusFilter, setSearchFilter, setTasks, changeTaskStatus, addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
