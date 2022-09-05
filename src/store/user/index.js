import { createSlice } from '@reduxjs/toolkit'
import {
  fetchUserReducers,
  signInWithEmailReducer,
  signInWithGoogleReducer
} from './thunks'

export const INTIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false
}

const userReducer = createSlice({
  name: 'user',
  initialState: INTIAL_STATE,
  reducers: {
    setUser(state, { payload: user }) {
      state.currentUser = user
    }
  },
  extraReducers: {
    ...fetchUserReducers,
    ...signInWithGoogleReducer,
    ...signInWithEmailReducer
  }
})

export const { setUser } = userReducer.actions
export default userReducer.reducer

export const selectUser = (state) => state.user.currentUser
