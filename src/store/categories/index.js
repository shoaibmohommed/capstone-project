import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import { getCategoriesAndDocuments } from '../../utils/firebase'
export const INTIAL_STATE = {
  categories: [],
  loading: false,
  error: null
}
export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const categoriesData =
        await getCategoriesAndDocuments()
      return categoriesData
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

const categoriesReducer = createSlice({
  name: 'categories',
  initialState: INTIAL_STATE,
  reducers: {
    setCategories(state, { payload: categories }) {
      state.categories = categories
    }
  },
  extraReducers: {
    [fetchCategories.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchCategories.fulfilled]: (
      state,
      { payload: categories, meta, ...extraProps }
    ) => {
      state.loading = false
      state.error = null
      state.categories = categories
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload.message
    }
  }
})

export const { setCategories } = categoriesReducer.actions
export default categoriesReducer.reducer

const selectCategoriesSelector = (state) => state.categories

export const selectCategories = createSelector(
  [selectCategoriesSelector],
  (categoriesSlice) => categoriesSlice.categories
)

export const selectCategoriesLoading = createSelector(
  [selectCategoriesSelector],
  (categoriesSlice) => categoriesSlice.loading
)

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {})
)
