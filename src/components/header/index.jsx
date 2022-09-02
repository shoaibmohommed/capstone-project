import { useContext } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { CartContext } from '../../contexts/cart'
import { UserContext } from '../../contexts/user'
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
  const { isCartOpen } = useContext(CartContext)
  const { currentUser } = useContext(UserContext)

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
