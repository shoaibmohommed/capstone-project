import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart'

import './index.scss'

const CartIcon = () => {
  const {
    isCartOpen,
    cartCount,
    setIsCartOpen
  } = useContext(CartContext)
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div
      className="cart-icon-container"
      onClick={toggleCartOpen}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon
