import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import Button from '../../lib/button'

const ProductCard = (item) => {
  const { name, price, imageUrl } = item;
  const { addItemToCart } = useContext(CartContext)
  const addToCartHandler = () => {
    addItemToCart(item)
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType="inverted"
        onClick={addToCartHandler}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductCard
