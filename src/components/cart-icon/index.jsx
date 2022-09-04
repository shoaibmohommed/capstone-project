import { useSelector, useDispatch } from 'react-redux'
import {
  selectCartCount,
  toggleCartIsOpen
} from '../../store/cart'
import {
  CartIconContainer,
  ItemCount,
  StyledShoppingIcon
} from './styles'

const CartIcon = () => {
  const dispatch = useDispatch()
  const cartCount = useSelector(selectCartCount)

  const cartIconClickHandler = () => {
    dispatch(toggleCartIsOpen())
  }

  return (
    <CartIconContainer onClick={cartIconClickHandler}>
      <StyledShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
