import { createSlice } from "@reduxjs/toolkit";

export enum taskStatus {
  DONE = "done",
  PROGRESS = "progress",
}

interface Task {
  id: number;
  title: string;
  description: string;
  status: taskStatus;
  responsiblePerson: string;
}

export interface TaskState {
  tasks: Task[];
  statusFilter: taskStatus[];
  searchPerson: string;
}

const initialState: TaskState = {
  tasks: [],
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
        if (a === "progress" && b === "done") {
          return -1;
        } else if (a === "done" && b === "progress") {
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
  },
});

export const { setStatusFilter, setSearchFilter } = taskSlice.actions;
export default taskSlice.reducer;
