import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { CartContext } from '../../contexts/cart'
import { UserContext } from '../../contexts/user'
import { signOutUser } from '../../utils/firebase'
import CartDropdown from '../cart-dropdown'
import CartIcon from '../cart-icon'
import './index.scss'

const Header = () => {
  const { isCartOpen } = useContext(CartContext)
  const { currentUser } = useContext(UserContext)

  return (
    <div className="navigation-bar">
      <Link className="logo-container" to="/">
        <CrwnLogo className="logo" />
      </Link>
      <div className="nav-links">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
        {currentUser ? (
          <span className="nav-link" onClick={signOutUser}>
            SIGN OUT
          </span>
        ) : (
          <Link className="nav-link" to="/signin">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  )
}

export default Header
