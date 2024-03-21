import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
};

const userSLice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isUserLoggedIn = true;
    },
  },
});

export const { loginUser } = userSLice.actions;
export default userSLice.reducer;
