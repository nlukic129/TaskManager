import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TaskSlice";
import userReducer from "./UserSlice";

const store = configureStore({
  reducer: {
    taskManager: taskReducer,
    user: userReducer,
  },
});

export default store;
