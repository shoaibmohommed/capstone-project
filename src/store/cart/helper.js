export const addCartItem = (cartItems, itemToAdd) => {
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

export const removeCartItem = (cartItems, itemToRemove) => {
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

export const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter(
    (item) => item.id !== itemToClear.id
  )
}
