import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/cart'
import Button from '../../lib/button'
import CartItem from '../cart-item'
import './styles.jsx'
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage
} from './styles.jsx'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const checkoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        )):<EmptyMessage>Your cart is empty</EmptyMessage>}
      </CartItems>
      <Button onClick={checkoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
