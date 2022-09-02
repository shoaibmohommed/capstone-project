import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import {
  Arrow,
  CheckoutItemContainer,
  ImageContainer,
  Name,
  Price,
  Quantity,
  RemoveBtn,
  Value
} from './styles.jsx'

const CheckoutItem = (item) => {
  const {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart
  } = useContext(CartContext)

  const itemRemoveHandler = () => {
    removeItemFromCart(item)
  }
  const itemAddHandler = () => {
    addItemToCart(item)
  }
  const clearCartItemHandler = () => {
    clearItemFromCart(item)
  }
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={item.imageUrl} alt={item.name} />
      </ImageContainer>
      <Name>{item.name}</Name>
      <Quantity>
        <Arrow onClick={itemRemoveHandler}>&#10094;</Arrow>
        <Value>{item.quantity}</Value>
        <Arrow onClick={itemAddHandler}>&#10095;</Arrow>
      </Quantity>
      <Price>{item.quantity * item.price}</Price>
      <RemoveBtn onClick={clearCartItemHandler}>
        &#10005;
      </RemoveBtn>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem
