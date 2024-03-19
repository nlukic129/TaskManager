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
  doneTasks: ITask[];
  inProgressTasks: ITask[];
  statusFilter: taskStatus[];
  searchPerson: string;
}

const initialState: TaskState = {
  doneTasks: [],
  inProgressTasks: [],
  statusFilter: [taskStatus.PROGRESS, taskStatus.DONE],
  searchPerson: "",
};

const taskSlice = createSlice({
  name: "tasks",
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

      state.doneTasks = parsedDoneTasks;
      state.inProgressTasks = parsedInProgressTasks;
    },
  },
});

export const { setStatusFilter, setSearchFilter, setTasks } = taskSlice.actions;
export default taskSlice.reducer;
