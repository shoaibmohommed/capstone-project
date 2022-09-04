import { createSlice } from '@reduxjs/toolkit'

export const INTIAL_STATE = {
  currentUser: null
}

const userReducer = createSlice({
  name: 'user',
  initialState: INTIAL_STATE,
  reducers: {
    setUser(state, { payload: user }) {
      state.currentUser = user
    }
  }
})

export const { setUser } = userReducer.actions
export default userReducer.reducer

export const selectUser = (state) => state.user.currentUser
