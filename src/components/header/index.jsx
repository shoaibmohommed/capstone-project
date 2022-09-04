import { useSelector } from 'react-redux'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { selectCartIsOpen } from '../../store/cart'
import { selectUser } from '../../store/user'
import { signOutUser } from '../../utils/firebase'
import CartDropdown from '../cart-dropdown'
import CartIcon from '../cart-icon'
import './styles.jsx'
import {
  LogoContainerLink,
  NavigationBar,
  NavLink,
  NavLinks
} from './styles.jsx'

const Header = () => {
  const isCartOpen = useSelector(selectCartIsOpen)
  const currentUser = useSelector(selectUser)

  return (
    <NavigationBar>
      <LogoContainerLink to="/">
        <CrwnLogo />
      </LogoContainerLink>
      <NavLinks>
        <NavLink to="/shop">Shop</NavLink>
        {currentUser ? (
          <NavLink as="span" onClick={signOutUser}>
            SIGN OUT
          </NavLink>
        ) : (
          <NavLink to="/signin">Sign In</NavLink>
        )}
        <CartIcon />
      </NavLinks>
      {isCartOpen && <CartDropdown />}
    </NavigationBar>
  )
}

export default Header
