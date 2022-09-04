import {
  combineReducers,
  configureStore
} from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'
import categoriesReducer from './categories'
import userReducer from './user'
import cartReducer from './cart'

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    [
      ...getDefaultMiddleware({ serializableCheck: false }),
      process.env.NODE_ENV !== 'production' && logger
    ].filter(Boolean)
})

export const persistor = persistStore(store)
