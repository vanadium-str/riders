import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: -1,
  isAdmin: 1
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setAdmin: (state, action) => {
      state.isAdmin = action.payload
    },
  },
})

export const { setUserId, setAdmin } = userSlice.actions;

export default userSlice.reducer;