import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice";

const store = configureStore({
  reducer: {
    taskManager: taskReducer,
  },
});

export default store;
