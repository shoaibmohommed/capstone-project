import { createContext, useEffect, useState } from 'react'

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
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0
})

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    )
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    )
    setCartTotal(newCartTotal)
  }, [cartItems])

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
    setIsCartOpen,
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
