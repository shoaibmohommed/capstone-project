import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import categoriesReducer from './categories'
import userReducer from './user'

const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
})

export default store
