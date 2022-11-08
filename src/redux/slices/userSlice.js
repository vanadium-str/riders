import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: -1,
  isAdmin: 1,
  email: '',
  phone: '',
  pass: '',
  passRepeat: '',
  oldPass: '',
  username: '',
  userData: ''
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
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
    setPass: (state, action) => {
      state.pass = action.payload
    },
    setPassRepeat: (state, action) => {
      state.passRepeat = action.payload
    },
    setOldPass: (state, action) => {
      state.oldPass = action.payload
    },
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setUserData: (state, action) => {
      state.userData = action.payload
    },
  },
})

export const {
  setUserId,
  setAdmin,
  setEmail,
  setPhone,
  setPass,
  setPassRepeat,
  setOldPass,
  setUsername,
  setUserData
} = userSlice.actions;

export default userSlice.reducer;