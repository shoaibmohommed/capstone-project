import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import './index.scss'

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
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={itemRemoveHandler}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={itemAddHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">
        {item.quantity * item.price}
      </span>
      <div
        className="remove-button"
        onClick={clearCartItemHandler}
      >
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem
