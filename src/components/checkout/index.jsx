import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import CheckoutItem from '../checkout-item'
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from './styles'

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} {...item} />
      ))}
      <Total className="total">Total: ${cartTotal}</Total>
    </CheckoutContainer>
  )
}

export default Checkout
