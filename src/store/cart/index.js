import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
import {
  addCartItem,
  clearCartItem,
  removeCartItem
} from './helper'

export const INTIAL_STATE = {
  isCartOpen: false,
  cartItems: []
}

const cartReducer = createSlice({
  name: 'cart',
  initialState: INTIAL_STATE,
  reducers: {
    setCartItems(state, { payload }) {
      state.cartItems = payload
    },
    toggleCartIsOpen(state) {
      state.isCartOpen = !state.isCartOpen
    },
    addItemToCart(state, { payload }) {
      const newItems = addCartItem(
        state.cartItems,
        payload
      )
      state.cartItems = newItems
    },
    removeItemFromCart(state, { payload }) {
      const newItems = removeCartItem(
        state.cartItems,
        payload
      )
      state.cartItems = newItems
    },
    clearItemFromCart(state, { payload }) {
      const newItems = clearCartItem(
        state.cartItems,
        payload
      )
      state.cartItems = newItems
    }
  }
})

export const {
  setCategories,
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
  toggleCartIsOpen
} = cartReducer.actions
export default cartReducer.reducer

export const selectCartSelector = (state) => state.cart
export const selectCartItems = createSelector(
  [selectCartSelector],
  (cart) => cart.cartItems
)

export const selectCartIsOpen = createSelector(
  [selectCartSelector],
  (cart) => cart.isCartOpen
)
export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((count, item) => {
      return (count += item.quantity)
    }, 0)
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, item) => {
      return (total += item.quantity * item.price)
    }, 0)
)
