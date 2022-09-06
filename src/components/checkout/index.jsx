import { useSelector } from 'react-redux'
import {
  selectCartItems,
  selectCartTotal
} from '../../store/cart'
import CheckoutItem from '../checkout-item'
import PaymentForm from '../payment-form'
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total
} from './styles'

const Checkout = () => {
  const cartItems = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal)

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
      <PaymentForm />
    </CheckoutContainer>
  )
}

export default Checkout
