import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import categoriesReducer from './categories'
import userReducer from './user'
import cartReducer from './cart'

const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
})

export default store
