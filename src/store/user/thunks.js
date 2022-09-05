import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase'

const fulfilled = (state, { payload }) => {
  state.loading = false
  state.error = null
  state.currentUser = payload
}
const rejected = (state, action) => {
  state.loading = false
  state.error = action.payload.message
}
const pending = (state) => {
  state.loading = true
  state.error = null
}
export const signInWithGoogle = createAsyncThunk(
  'categories/signInWithGoogle',
  async (_, { rejectWithValue }) => {
    try {
      const { user } = await signInWithGooglePopup()
      const userSnap = await createUserFromAuth(user)
      const response = {
        id: userSnap.id,
        ...userSnap.data()
      }
      console.log(response)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const signInWithGoogleReducer = {
  [signInWithGoogle.pending]: pending,
  [signInWithGoogle.fulfilled]: fulfilled,
  [signInWithGoogle.rejected]: rejected
}

export const fetchUser = createAsyncThunk(
  'categories/fetchUser',
  async (_, { rejectWithValue }) => {
    try {
      const currentUser = await getCurrentUser()

      if (!currentUser) {
        return null
      }

      const userSnap = await createUserFromAuth(currentUser)
      return { id: userSnap.id, ...userSnap.data() }
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const fetchUserReducers = {
  [fetchUser.pending]: pending,
  [fetchUser.fulfilled]: fulfilled,
  [fetchUser.rejected]: rejected
}

export const signInWithEmail = createAsyncThunk(
  'categories/signInWithEmail',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { user } =
        await signInAuthUserWithEmailAndPassword(
          email,
          password
        )
      const userSnap = await createUserFromAuth(user)
      const response = {
        id: userSnap.id,
        ...userSnap.data()
      }
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const signInWithEmailReducer = {
  [signInWithEmail.pending]: pending,
  [signInWithEmail.fulfilled]: fulfilled,
  [signInWithEmail.rejected]: rejected
}

export const signUpWithEmail = createAsyncThunk(
  'categories/signUpWithEmail',
  async (
    { email, password, displayName },
    { rejectWithValue }
  ) => {
    try {
      const { user } =
        await createAuthUserWithEmailAndPassword(
          email,
          password
        )
      const userSnap = await createUserFromAuth(user, {
        displayName
      })
      const response = {
        id: userSnap.id,
        ...userSnap.data()
      }
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

export const signUpWithEmailReducer = {
  [signUpWithEmail.pending]: pending,
  [signUpWithEmail.fulfilled]: fulfilled,
  [signUpWithEmail.rejected]: rejected
}
