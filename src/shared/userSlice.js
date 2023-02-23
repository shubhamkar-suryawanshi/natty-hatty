import { createSlice } from '@reduxjs/toolkit';
import { users } from '../constants';

const userSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [...users],
  },
  reducers: {
    addUser: (state, action) => {
      state.items.push(action.payload);
      console.log(users);
    },
    removeUser: (state) => {
      state.items = [];
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
