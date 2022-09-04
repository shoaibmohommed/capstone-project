import { useDispatch } from 'react-redux'
import Button, { BUTTON_TYPES } from '../../lib/button'
import { addItemToCart } from '../../store/cart'
import {
  Footer,
  Name,
  Price,
  ProductCardContainer
} from './styles'

const ProductCard = (item) => {
  const dispatch = useDispatch()
  const { name, price, imageUrl } = item
  const addToCartHandler = () => {
    dispatch(addItemToCart(item))
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
