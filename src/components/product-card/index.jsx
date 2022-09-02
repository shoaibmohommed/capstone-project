import { useContext } from 'react'
import { CartContext } from '../../contexts/cart'
import Button, { BUTTON_TYPES } from '../../lib/button'
import {
  Footer,
  Name,
  Price,
  ProductCardContainer
} from './styles'

const ProductCard = (item) => {
  const { name, price, imageUrl } = item
  const { addItemToCart } = useContext(CartContext)
  const addToCartHandler = () => {
    addItemToCart(item)
  }

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES.inverted}
        onClick={addToCartHandler}
      >
        Add to cart
      </Button>
    </ProductCardContainer>
  )
}

export default ProductCard
