import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon
} from './styles'

const CartIcon = () => {
  const { cartCount, toggelIsCartOpen } =
    useContext(CartContext)

  return (
    <CartIconContainer onClick={toggelIsCartOpen}>
      <StyledShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
