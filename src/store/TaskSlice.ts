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
  statusFilter: [taskStatus.DONE, taskStatus.PROGRESS],
  searchPerson: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      const status = action.payload;
      const statusIndex = state.statusFilter.indexOf(status);
      if (statusIndex !== -1) {
        state.statusFilter.splice(statusIndex, 1);
      } else {
        state.statusFilter.push(status);
      }
      console.log([...state.statusFilter]);
    },
  },
});

export const { setStatusFilter } = taskSlice.actions;
export default taskSlice.reducer;
