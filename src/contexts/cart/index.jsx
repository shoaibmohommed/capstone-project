import { createContext, useReducer } from 'react'

const addCartItem = (cartItems, itemToAdd) => {
  const foundItem = cartItems.find(
    (product) => product.id === itemToAdd.id
  )
  if (foundItem) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id
        ? { ...foundItem, quantity: foundItem.quantity + 1 }
        : item
    )
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }]
}

const removeCartItem = (cartItems, itemToRemove) => {
  const foundItem = cartItems.find(
    (product) => product.id === itemToRemove.id
  )
  if (foundItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...foundItem, quantity: foundItem.quantity - 1 }
        : item
    )
  }
  return cartItems.filter(
    (item) => item.id !== itemToRemove.id
  )
}

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter(
    (item) => item.id !== itemToClear.id
  )
}

export const CartContext = createContext({
  isCartOpen: false,
  toggelIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0
})

export const INTIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0
}
export const SET_CART_ITEMS_ACTION_TYPE = 'SET_CART_ITEMS'
export const TOGGLE_IS_CART_OPEN_ACTION_TYPE =
  'TOGGLE_IS_CART_OPEN'
export const cartReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_CART_ITEMS_ACTION_TYPE: {
      return {
        ...state,
        ...payload
      }
    }
    case TOGGLE_IS_CART_OPEN_ACTION_TYPE:
      return {
        ...state,
        isCartOpen: !state.isCartOpen
      }
    default:
      throw new Error(
        `Unhandled type ${type} in cartReducer`
      )
  }
}

export const CartProvider = ({ children }) => {
  const [
    { cartItems, cartCount, cartTotal, isCartOpen },
    dispatch
  ] = useReducer(cartReducer, INTIAL_STATE)

  const setCartItems = (items) => {
    const { count: cartCount, total: cartTotal } =
      items.reduce(
        (data, item) => {
          data.count += item.quantity
          data.total += item.quantity * item.price
          return data
        },
        { total: 0, count: 0 }
      )
    dispatch({
      type: SET_CART_ITEMS_ACTION_TYPE,
      payload: { cartItems: items, cartCount, cartTotal }
    })
  }
  const toggelIsCartOpen = () => {
    dispatch({
      type: TOGGLE_IS_CART_OPEN_ACTION_TYPE
    })
  }

  const addItemToCart = (itemToAdd) => {
    setCartItems(addCartItem(cartItems, itemToAdd))
  }
  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove))
  }

  const clearItemFromCart = (itemToClear) => {
    setCartItems(clearCartItem(cartItems, itemToClear))
  }

  const value = {
    isCartOpen,
    toggelIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal
  }
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}
