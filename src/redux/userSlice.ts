import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, fName, lName, status } = action.payload;
      const existingUser = state.find((user: any) => user.id === id);
      if (existingUser) {
        existingUser.fName = fName;
        existingUser.lName = lName;
        existingUser.status = status;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user: any) => user.id === id);
      if (existingUser) {
        return state.filter((user: any) => user.id !== id);
      }
    },
  },
});

export const { addUser, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
