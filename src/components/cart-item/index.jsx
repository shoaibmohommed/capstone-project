import {
  CartItemContainer,
  ItemDetails,
  Name
} from './styles'

const CartItem = ({ name, imageUrl, quantity, price }) => {
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  )
}
export default CartItem
