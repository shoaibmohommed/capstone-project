import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon
} from './styles'

const CartIcon = () => {
  const { isCartOpen, cartCount, setIsCartOpen } =
    useContext(CartContext)
  const toggleCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <StyledShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
