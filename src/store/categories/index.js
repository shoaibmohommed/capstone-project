import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
export const INTIAL_STATE = {
  categories: []
}

const categoriesReducer = createSlice({
  name: 'categories',
  initialState: INTIAL_STATE,
  reducers: {
    setCategories(state, { payload: categories }) {
      state.categories = categories
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

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category
      acc[title.toLowerCase()] = items
      return acc
    }, {})
)
